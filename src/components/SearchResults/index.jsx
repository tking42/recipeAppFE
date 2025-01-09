import { useState } from "react";
import RecipeCard from "../RecipeCard/index.jsx";
import Pagination from "../Pagination/index.jsx";

const SearchResults = ({ searchResults, user, getSavedRecipes, userRecipes, setHideWhenUseSearch, setShowSearchResults, searchInput, setSearchInput }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(searchResults.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRecipes = searchResults.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0)
    }

    return (
        <>
            <p className='text-center text-2xl'>
                 Results for {searchInput}
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-gray-700 m-8'>
                {currentRecipes.length === 0 ?
                    (
                        <p className='text-white text-3xl'>No recipes found</p>
                    ) :
                    (
                    currentRecipes.map((recipe, index) => (
                        <div key={index}>
                            <RecipeCard recipe={recipe} user={user} getSavedRecipes={getSavedRecipes} userRecipes={userRecipes} />
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
                setHideWhenUseSearch('');
                setShowSearchResults('hidden');
                setSearchInput('');
                setCurrentPage(1)
                window.scrollTo(0, 0)
            }}>BACK</p>
        </>
    );
};

export default SearchResults;


