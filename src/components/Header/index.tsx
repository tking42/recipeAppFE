import Form from "../Form";
import SavedRecipes from "../SavedRecipes";
import {useState} from "react";
const Header = ({loggedIn, user, hide, setHide}) => {

    const [userRecipes, setUserRecipes] = useState([])
    const [hideSaved, setHideSaved] = useState('hidden')

    const getSavedRecipes = async () => {
        const user_id = user.id
        const response = await fetch(`http://localhost:3002/getSavedRecipes?user_id=${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        const savedRecipes = data.savedRecipes
        setUserRecipes(savedRecipes)
    }

    const changeDisplay=  () => {
        setHideSaved('')
        setHide('hidden')
    }

    const userEmail = user.email
    return (
        <>
            {loggedIn === false ? (
                <>
                    <div className="flex justify-evenly items-center m-12 p-8">
                        <img
                            src="backgroundImg.jpg"
                            alt="food"
                            className="w-1/3 h-auto rounded-full transform rotate-120 skew-x-12"
                        />
                        <div className='w-1/3'>
                            <p className='text-7xl font-bold '>Hungry?</p><br />
                            <p className='text-3xl'>
                                Use the recipe finder to turn your spare ingredients into something
                                delicious from over <strong>45,000</strong> recipes. Whether you want a sweet treat or a fancy dinner, there will be a recipe for you!
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div
                    className="flex justify-center gap-10 ms-12 p-6">
                    <div className={`${hide} text-4xl w-1/3`}>
                        <p className="">
                            Welcome {userEmail}!<br/> Use the form to find recipes
                            from the ingredients you want to use. If you find one you like, save it to your saved
                            recipes for later.
                        </p>
                        <p
                            className="mt-6 text-blue-500 hover:text-blue-700 cursor-pointer hover:underline"
                            onClick={() => (getSavedRecipes(), changeDisplay())}
                        >
                            Saved Recipes
                        </p>
                    </div>

                    <div>
                        <Form hide={hide} user={user} setHide={setHide} userRecipes={userRecipes} getSavedRecipes={getSavedRecipes}/>
                        <SavedRecipes
                            userRecipes={userRecipes}
                            setHide={setHide}
                            setHideSaved={setHideSaved}
                            hideSaved={hideSaved}
                            user={user}
                            getSavedRecipes={getSavedRecipes}
                        />
                    </div>
                </div>

            )}
        </>
    )
}

export default Header
