import {useState} from "react";

const RecipeModal = ({ recipe, onClose, user, userRecipes, getSavedRecipes}) => {

    const [toggleIngredients, setToggleIngredients] = useState('ingredients')
    const toggle = (x) => {
        setToggleIngredients(x)
    }

    const handleSaveClick = async () => {
        const recipe_id = recipe.id
        const user_id = user.id
        await fetch(`http://localhost:3002/saveRecipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id,
                user_id
            }),
        })
        getSavedRecipes()
    }

    const handleRemoveClick = async () => {
        const recipe_id = recipe.id
        const user_id = user.id
        await fetch(`http://localhost:3002/removeRecipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id,
                user_id
            }),
        })
        getSavedRecipes()
    }

    const isRecipeSaved = userRecipes.some((r) => r.id === recipe.id);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full m-12">

                <div className="flex justify-between">
                    <div>
                        <p className="text-xl font-bold mb-4">{recipe.title}</p>

                    </div>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Close
                    </button>
                </div>

                <p className="text-xl font-bold mb-4">
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
                {toggleIngredients === 'ingredients' ? (
                    <div className="grid grid-cols-2">
                        {recipe.ingredients.split('#').map((ing, index) => (
                            <ul key={index}>
                                <li>{ing}</li>
                            </ul>
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
                {
                    isRecipeSaved ?
                        <p onClick={handleRemoveClick}
                                                      className="mt-2 text-red-500 hover:text-blue-700 cursor-pointer">Remove
                            from favourite recipes</p>
                        :
                        <p onClick={handleSaveClick}
                                                        className="mt-2 text-green-500 hover:text-blue-700 cursor-pointer">Save
                            to favourite recipes</p>
                    }
            </div>
        </div>
    )
}

export default RecipeModal
