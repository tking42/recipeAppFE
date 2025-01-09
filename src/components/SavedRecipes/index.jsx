import { useState } from "react";
import RecipeCard from "../RecipeCard/index.jsx";
import Pagination from "../Pagination/index.jsx";

const SavedRecipes = ({ userRecipes, user, setHide, hideSaved, setHideSaved, getSavedRecipes }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(userRecipes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRecipes = userRecipes.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0)
    };

    return (
        <div className={`${hideSaved}`}>
            <p className='text-center text-2xl'>
                Favourite Recipes:
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-gray-700 m-8'>
                {userRecipes.length > 0 ? (
                    currentRecipes.map((recipe, index) => (
                        <div key={index}>
                            <RecipeCard recipe={recipe} getSavedRecipes={getSavedRecipes} userRecipes={userRecipes} user={user} />
                        </div>
                    ))
                ) : (
                    <p className='text-white text-3xl'>No recipes saved</p>
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
                setHideSaved('hidden');
                setHide('');
                setCurrentPage(1)
                window.scrollTo(0, 0)
            }}>BACK</p>
        </div>
    );
};

export default SavedRecipes;

