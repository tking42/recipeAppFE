import { useState } from "react";
import RecipeCard from "../RecipeCard/index.jsx";
import Pagination from "../Pagination/index.jsx";

const RecipeResults = ({ recipesReturned, hidden, setHidden, setHide, ing1, ing2, ing3, ing4, ing5, user, userRecipes, getSavedRecipes, setWidth, setGap, setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5 }) => {
    const sortedRecipes = recipesReturned.sort((a, b) => b.ingredient_match_count - a.ingredient_match_count)

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(sortedRecipes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRecipes = sortedRecipes.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0)
    };

    return (
        <div className={hidden}>
            <p className='text-center text-2xl m-6'>
                Your Ingredients: {ing1}, {ing2}, {ing3}, {ing4}, {ing5}
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-gray-700 m-8'>
                {recipesReturned.length === 0 ? (
                    <p className='text-3xl text-center text-white'>No recipes found</p>
                ) : (
                    currentRecipes.map((recipe, index) => (
                        <div key={index}>
                            <RecipeCard recipe={recipe} getSavedRecipes={getSavedRecipes} userRecipes={userRecipes} user={user} />
                        </div>
                    ))
                )}
            </div>

            {currentRecipes.length > 0 && totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}

            <p className='underline text-2xl text-center mb-6 cursor-pointer' onClick={() => {
                setHidden('hidden');
                setHide('');
                setWidth('1/3');
                setGap('10');
                setIngredient1('');
                setIngredient2('');
                setIngredient3('');
                setIngredient4('');
                setIngredient5('');
                setCurrentPage(1)
                window.scrollTo(0, 0)
            }}>BACK</p>
        </div>
    );
};

export default RecipeResults;

