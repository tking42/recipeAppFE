import { useState } from 'react';
import RecipeModal from "../RecipeModal"

const RecipeCard = ({recipe, user, getSavedRecipes, userRecipes}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    }

    const onClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <div
                className="p-4 bg-white border rounded-lg shadow-lg cursor-pointer"
                onClick={handleCardClick}
            >
                <p><strong>{recipe.title}</strong></p>
                {recipe.ingredient_match_count !== undefined && recipe.ingredient_match_count !== null && (
                    <p>{recipe.ingredient_match_count}/5 ingredients</p>
                )}
            </div>
            {isModalOpen && <RecipeModal getSavedRecipes={getSavedRecipes} userRecipes={userRecipes} recipe={recipe} user={user} onClose={onClose} />}
        </div>
    )
}

export default RecipeCard;
