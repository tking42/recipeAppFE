import RecipeCard from "../RecipeCard";

const RecipeResults = ({ recipesReturned, hidden, setHidden, setHide, ing1, ing2, ing3, ing4, ing5, user, userRecipes, getSavedRecipes}) => {
    const sortedRecipes = recipesReturned.sort((a, b) => b.ingredient_match_count - a.ingredient_match_count);

    return (
        <div className={hidden}>
            <p className='text-center text-2xl m-6'>
                Your Ingredients: {ing1}, {ing2}, {ing3}, {ing4}, {ing5}
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-gray-700 m-8'>
                {recipesReturned.length === 0 ? (
                    <p className='text-xl text-center text-gray-500'>No recipes with your ingredients</p>
                ) : (
                    sortedRecipes.slice(0, 10).map((recipe, index) => (
                        <div key={index} className=''>
                            <RecipeCard userRecipes={userRecipes} recipe={recipe} user={user} getSavedRecipes={getSavedRecipes}/>
                        </div>
                    ))
                )}
            </div>
            <p className='underline text-2xl text-center mb-6 cursor-pointer' onClick={() => {setHidden('hidden'); setHide('')}}>BACK</p>
        </div>
    );
};

export default RecipeResults;

