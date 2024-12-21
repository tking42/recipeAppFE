import Form from "../Form";
import SavedRecipes from "../SavedRecipes";
import {useState} from "react";
import WelcomeMessage from "../WelcomeMessage";
import LoggedInMessage from "../LoggedInMessage";
const MainDisplay = ({loggedIn, user, hide, setHide}) => {

    const [userRecipes, setUserRecipes] = useState([])
    const [hideSaved, setHideSaved] = useState('hidden')
    const [width, setWidth] = useState('1/3')
    const [gap, setGap] = useState('10')

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

    return (
        <>
            {!loggedIn ? (
              <WelcomeMessage/>
            ) : (
                <div>
                <div className={`flex flex-col md:flex-row md:justify-center md:content-normal md:gap-${gap} md:p-6 text-center md:text-left mx-4`}>
                    <div className={`md:w-${width}`}>
                    <LoggedInMessage changeDisplay={changeDisplay}
                                         user={user}
                                         getSavedRecipes={getSavedRecipes}
                                         hide={hide}/>
                    </div>
                    <div>
                        <Form hide={hide}
                              user={user}
                              setHide={setHide}
                              userRecipes={userRecipes}
                              getSavedRecipes={getSavedRecipes}
                        setWidth={setWidth}
                        setGap={setGap}/>
                    </div>

                </div>
                <SavedRecipes
                userRecipes={userRecipes}
            setHide={setHide}
            setHideSaved={setHideSaved}
            hideSaved={hideSaved}
            user={user}
            getSavedRecipes={getSavedRecipes}
        />
                </div>

            )}
        </>
    )
}

export default MainDisplay
