const LoggedInMessage = ({ hide, user, getSavedRecipes, changeDisplay }) => {
    return (
        <div className={`${hide} mb-4 flex flex-col justify-center items-center`}>
            <p className="text-2xl sm:text-3xl text-center">
                Welcome {user.email}!<br/> Use the form to find recipes
                from the ingredients you want to use. If you find one you like, save it to your favourite
                recipes.
            </p>
            <img
                src="ingredients.jpeg"
                className='rounded-full m-2'
                alt="Background"
            />
            <p
                className="mt-6 text-blue-500 text-4xl hover:text-blue-700 cursor-pointer hover:underline font-extrabold"
                onClick={() => (getSavedRecipes(), changeDisplay())}
            >
                My Favourite Recipes
            </p>

        </div>
    );
};

export default LoggedInMessage;


