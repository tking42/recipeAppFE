import RecipeCard from "../RecipeCard";

const SavedRecipes = ({ userRecipes, user, setHide, hideSaved, setHideSaved, getSavedRecipes}) => {

    return (
        <div className={`${hideSaved}`}>
            <p className='text-center text-2xl'>
                Favourite Recipes:
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-gray-700 m-8'>
                {userRecipes.map((recipe, index) => (
                        <div key={index} className=''>
                            <RecipeCard recipe={recipe}
                                        getSavedRecipes={getSavedRecipes}
                                        userRecipes={userRecipes} user={user}/>
                        </div>
                    ))
                }
            </div>
            <p className='underline text-2xl text-center mb-6 cursor-pointer' onClick={() => {setHideSaved('hidden'); setHide('')}}>BACK</p>
        </div>
    )
}

export default SavedRecipes