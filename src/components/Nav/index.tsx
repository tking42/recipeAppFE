import { useState } from "react";
import Login from "../Login";

const Nav = () => {
    const [showLoginModel, setShowLoginModel] = useState(false)
    const handleClick = () => {
        setShowLoginModel(true)
    }

    return (
        <div className="flex p-2 mx-8 mt-10 justify-between">
            <p className="text-lg font-bold">Thomas King</p>
            <div className="flex gap-6">
                <button
                    className="cursor-pointer hover:underline"
                    onClick={handleClick}
                >
                    LOG IN / SIGN UP
                </button>
            </div>
            {showLoginModel && <Login setShowLoginModel={setShowLoginModel}/>}
        </div>
    );
};

export default Nav

