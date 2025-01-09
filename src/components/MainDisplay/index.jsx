import Form from "../Form/index.jsx";
import SavedRecipes from "../SavedRecipes/index.jsx";
import {useState} from "react";
import WelcomeMessage from "../WelcomeMessage/index.jsx";
import LoggedInMessage from "../LoggedInMessage/index.jsx";
const MainDisplay = ({loggedIn, user, hide, setHide, setHideWhenUseSearch, getSavedRecipes, userRecipes}) => {

    const [hideSaved, setHideSaved] = useState('hidden')
    const [width, setWidth] = useState('1/3')
    const [gap, setGap] = useState('10')

    const changeDisplay=  () => {
        setHideSaved('')
        setHide('hidden')
        window.scrollTo(0, 0)
    }

    return (
        <div className={setHideWhenUseSearch}>
            {!loggedIn ? (
              <WelcomeMessage/>
            ) : (
                <div>
                <div className={`flex flex-col md:flex-row md:justify-center gap-4 md:content-normal md:gap-${gap} md:p-8 text-center md:text-left mx-4`}>
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
                <SavedRecipes userRecipes={userRecipes}
                              setHide={setHide}
                              setHideSaved={setHideSaved}
                              hideSaved={hideSaved}
                              user={user}
                              getSavedRecipes={getSavedRecipes}
        />
                </div>

            )}
        </div>
    )
}

export default MainDisplay
