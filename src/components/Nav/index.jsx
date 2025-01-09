import { useState } from "react";
import LoginRegister from "../LoginRegister/index.jsx";
import Search from "../Search/index.jsx";

const Nav = ({ setLoggedIn, loggedIn, setUser, hide, setHideWhenUseSearch, hideWhenUseSearch, user, getSavedRecipes, userRecipes }) => {
    const [showLoginModel, setShowLoginModel] = useState(false);

    const handleClick = () => {
        if (loggedIn === false) {
            setShowLoginModel(true);
        } else {
            setLoggedIn(false)
        }
        window.scrollTo(0, 0)
    }

    return (
        <div className={`m-2 text-center ${hide}`}>
            <div>
                    {loggedIn ?
                        <div className={`flex flex-col gap-4 items-center justify-evenly ${hide}`}>
                            <button
                                className={`cursor-pointer hover:underline px-4 py-2 border rounded-md ${hideWhenUseSearch}`}
                                onClick={handleClick}
                            >LOG OUT
                            </button>
                            <Search setHideWhenUseSearch={setHideWhenUseSearch}
                                    hideWhenUseSearch={hideWhenUseSearch}
                                    user={user}
                                    getSavedRecipes={getSavedRecipes}
                                    userRecipes={userRecipes}/>
                        </div>
                        : <button
                            className="cursor-pointer hover:underline px-4 py-2 border rounded-md"
                            onClick={handleClick}
                        >LOG IN / SIGN UP
                        </button>
                }
            </div>
            {showLoginModel && !loggedIn && (
                <LoginRegister
                    setUser={setUser}
                    setLoggedIn={setLoggedIn}
                    setShowLoginModel={setShowLoginModel}
                />
            )}
        </div>
    )
}

export default Nav;