import { useState } from 'react';
import IngredientInput from "../IngredientInput";
import RecipeResults from "../RecipeResults";

const Form = ({hide, setHide, user, userRecipes, getSavedRecipes}) => {
    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [ingredient4, setIngredient4] = useState('');
    const [ingredient5, setIngredient5] = useState('');


    const [hidden, setHidden] = useState('hidden');

    const [recipesReturned, setRecipesReturned] = useState([])
    const handleIngredientChange = (index, ingredient) => (e) => {
        ingredient(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:3002/getFormResults?ingredient1=${ingredient1}&ingredient2=${ingredient2}&ingredient3=${ingredient3}&ingredient4=${ingredient4}&ingredient5=${ingredient5}`
        )
        const results = await response.json();
        setHidden('')
        setHide('hidden')
        setRecipesReturned(results.results)
    }

    return (
        <>
            <div className={`max-w-lg mx-auto  p-6 bg-white rounded-lg shadow-lg text-gray-700 ${hide}`}>
                <p className="text-center m-4">Please enter 5 ingredients you would like to cook with!</p>
                    <form onSubmit={handleSubmit}>
                        {['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4', 'ingredient5'].map((ingredient, index) => (
                            <IngredientInput
                                key={ingredient}
                                label={`Ingredient ${index + 1}`}
                                value={eval(ingredient)}
                                onChange={handleIngredientChange(index, eval(`setIngredient${index + 1}`))}
                            />
                        ))}
                        <button
                            type="submit"
                            className="w-full p-4 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md">
                            Find Recipe's
                        </button>
                    </form>
            </div>
            <RecipeResults ing1={ingredient1}
                           ing2={ingredient2}
                           ing3={ingredient3}
                           ing4={ingredient4}
                           ing5={ingredient5}
                           recipesReturned={recipesReturned}
                           setHidden={setHidden}
                           setHide={setHide}
                           hidden={hidden}
                           user={user}
                           userRecipes={userRecipes}
                           getSavedRecipes={getSavedRecipes}
                        />
        </>
    );
};

export default Form;
