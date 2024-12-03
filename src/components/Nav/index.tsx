import { useState } from "react";
import Login from "../Login";

const Nav = ({ setLoggedIn, loggedIn, user, setUser }) => {
    const [showLoginModel, setShowLoginModel] = useState(false);

    const handleClick = () => {
        if (loggedIn === false) {
            setShowLoginModel(true);
        } else {
            setLoggedIn(false)
        }
    }

    return (
        <div className="flex p-2 mx-8 mt-10 justify-between">
            <p className="text-lg">{loggedIn ? user : "Crimble Crumble"}</p>
            <div className="flex gap-6">
                <button
                    className="cursor-pointer hover:underline"
                    onClick={handleClick}
                >
                    {loggedIn ? "LOG OUT" : "LOG IN / SIGN UP"}
                </button>
            </div>
            {showLoginModel && !loggedIn && (
                <Login setUser={setUser} setLoggedIn={setLoggedIn} setShowLoginModel={setShowLoginModel} />
            )}
        </div>
    )
}

export default Nav;
