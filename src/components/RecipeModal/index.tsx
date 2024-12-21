import { useState } from "react";
import ConfirmationModal from "../ConfirmationModel";
const RecipeModal = ({ recipe, onClose, user, userRecipes, getSavedRecipes }) => {
    const [toggleIngredients, setToggleIngredients] = useState('ingredients');
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const toggle = (toggleTo) => {
        setToggleIngredients(toggleTo);
    }
    const handleSaveClick = async () => {
        const recipe_id = recipe.id;
        const user_id = user.id;
        await fetch(`http://localhost:3002/saveRecipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id,
                user_id
            }),
        });
        getSavedRecipes();
    };

    const handleRemoveClick = () => {
        setShowConfirmModal(true)
    }

    const handleConfirmRemove = async () => {
        const recipe_id = recipe.id;
        const user_id = user.id;
        await fetch(`http://localhost:3002/removeRecipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id,
                user_id
            }),
        });
        getSavedRecipes();
        setShowConfirmModal(false)
        onClose()
    };

    const handleCancelRemove = () => {
        setShowConfirmModal(false)
    };

    const isRecipeSaved = userRecipes.some((r) => r.id === recipe.id);

    return (
        <div className="fixed inset-0 bg-gray-600 flex items-center justify-center z-50 h-full overflow-y-auto">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-4xl m-4 sm:m-12">
                <div className="flex justify-between">
                    <div>
                        <p className="text-lg sm:text-xl text-left font-bold mb-4">{recipe.title}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ms-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Close
                    </button>
                </div>

                <p className="text-lg sm:text-xl font-bold mb-4">
          <span
              onClick={() => toggle('ingredients')}
              className={`cursor-pointer ${toggleIngredients === 'ingredients' ? 'text-gray-700 font-bold' : 'text-gray-400 font-light'}`}
          >
            Ingredients
          </span> | <span
                    onClick={() => toggle('method')}
                    className={`cursor-pointer ${toggleIngredients === 'method' ? 'text-gray-700 font-bold' : 'text-gray-400 font-light'}`}
                >
            Method
          </span>
                </p>

                <div className="max-h-[60vh] overflow-y-auto">
                    {toggleIngredients === 'ingredients' ? (
                        <div>
                            {recipe.ingredients.split('#').map((ing, index) => (
                                <div key={index} className="text-left">
                                    <p className="text-sm sm:text-base text-gray-700">{ing}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>
                                {recipe.instructions.startsWith('Watch how to make this recipe.')
                                    ? recipe.instructions.slice(30)
                                    : recipe.instructions}
                            </p>
                        </div>
                    )}
                </div>

                {isRecipeSaved ? (
                    <p
                        onClick={handleRemoveClick}
                        className="mt-2 text-red-500 hover:text-blue-700 cursor-pointer"
                    >
                        Remove from favourite recipes
                    </p>
                ) : (
                    <p
                        onClick={handleSaveClick}
                        className="mt-2 text-green-500 hover:text-blue-700 cursor-pointer"
                    >
                        Save to favourite recipes
                    </p>
                )}
            </div>

            {showConfirmModal && (
                <ConfirmationModal
                    message="Are you sure you want to remove this recipe from your favourite recipes?"
                    onConfirm={handleConfirmRemove}
                    onCancel={handleCancelRemove}
                />
            )}
        </div>
    );
};

export default RecipeModal;

