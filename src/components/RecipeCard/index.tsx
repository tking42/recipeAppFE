import { useState } from 'react';
import RecipeModal from "../RecipeModal"

const RecipeCard = ({recipe}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div
                className="p-4 bg-white border rounded-lg shadow-lg cursor-pointer"
                onClick={handleCardClick}
            >
                <p><strong>{recipe.title}</strong></p>
                <p>{recipe.ingredient_match_count}/5 ingredients</p>
            </div>

            {isModalOpen && <RecipeModal recipe={recipe} onClose={handleCloseModal} />}
        </div>
    );
};

export default RecipeCard;
