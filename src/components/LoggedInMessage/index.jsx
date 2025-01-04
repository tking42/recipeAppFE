const LoggedInMessage = ({ hide, user, getSavedRecipes, changeDisplay }) => {
    console.log(user)
    return (
        <div className={`${hide} mb-4 flex flex-col justify-center items-center`}>
            <p className="text-2xl text-center">
                Welcome <strong className='text-3xl'>{user.firstName}!</strong><br/> Use the form to find tasty recipes with what you’ve got in your fridge, or simply search for your favorite meals.
                Found something you love? Save it to your favorites so you can make it again!
            </p>
            <img
                src="ingredients.jpeg"
                className='rounded-full m-2'
                alt="Background"
            />
            <p
                className="mt-6 text-blue-500 text-4xl hover:text-blue-700 cursor-pointer hover:underline font-extrabold text-center"
                onClick={() => (getSavedRecipes(), changeDisplay())}
            >
                My Favourite Recipes
            </p>

        </div>
    );
};

export default LoggedInMessage;


