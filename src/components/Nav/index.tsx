import { useState } from "react";
import LoginRegister from ".././LoginRegister";

const Nav = ({ setLoggedIn, loggedIn, setUser, hide }) => {
    const [showLoginModel, setShowLoginModel] = useState(false);

    const handleClick = () => {
        if (loggedIn === false) {
            setShowLoginModel(true);
        } else {
            setLoggedIn(false)
        }
    }

    return (
        <div className={`m-4 text-center ${hide}`}>
            <div>
                <button
                    className="cursor-pointer hover:underline px-4 py-2 border rounded-md"
                    onClick={handleClick}
                >
                    {loggedIn ? <p>LOG OUT</p> : <p>LOG IN / SIGN UP</p>}
                </button>
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