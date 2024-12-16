import { useState } from "react";

const Login = ({ setShowLoginModel, setLoggedIn, setUser }) => {
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [confirmEmailReg, setConfirmEmailReg] = useState("")
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toggleLogin, setToggleLogin] = useState(false)
    const [message, setMessage] = useState("")
    const [colourMessage, setColourMessage] = useState('green')
    const handleRegister = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3002/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailReg,
                passwordReg,
                confirmEmailReg,
                confirmPasswordReg
            }),
        })

        const data = await response.json()
        if (data.type === 'error') {
            setColourMessage('red')
        } else {
            setColourMessage('green')
        }

        if (response.ok) {
            setMessage(data.message);
            setEmailReg("");
            setPasswordReg("");
            setConfirmEmailReg("");
            setConfirmPasswordReg("");
        } else {
            setMessage(data.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3002/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        if (data.type === 'error') {
            setColourMessage('red')
        } else {
            setColourMessage('green')
        }

        if (response.ok) {
            setLoggedIn(true)
            setShowLoginModel(false)
            setUser(data)
        } else {
            setMessage(data.message)
            setEmail("")
            setPassword("")
        }
    }


    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h1 className="text-xl mb-4 text-gray-700">{toggleLogin ? "Registration" : "Login"}</h1>
                {toggleLogin ? (
                    <div className="text-gray-700">
                        <input
                            type="email"
                            className="border p-2 w-full mb-2"
                            placeholder="Email"
                            value={emailReg}
                            onChange={(e) => setEmailReg(e.target.value)}
                        />
                        <input
                            type="email"
                            className="border p-2 w-full mb-2"
                            placeholder="Confirm Email"
                            value={confirmEmailReg}
                            onChange={(e) => setConfirmEmailReg(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-2 w-full mb-2"
                            value={passwordReg}
                            onChange={(e) => setPasswordReg(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="border p-2 w-full mb-4"
                            value={confirmPasswordReg}
                            onChange={(e) => setConfirmPasswordReg(e.target.value)}
                        />
                        <button
                            className="w-full bg-blue-500 text-white p-2"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                        <p className={`text-center m-4 text-${colourMessage}-500`}>{message}</p>
                        <p className="mt-4 text-center text-gray-700">
                            Already have an account?{" "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => {
                                    setToggleLogin(false);
                                    setMessage("")
                                    setEmail("")
                                    setPassword("")
                                }}
                            >
                                Log In
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="text-gray-700">
                        <input
                            type="text"
                            placeholder="Email"
                            className="border p-2 w-full mb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-2 w-full mb-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="w-full bg-green-500 text-white p-2"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <p className={`text-center m-4 text-${colourMessage}-500`}>{message}</p>
                        <p className="mt-4 text-center text-gray-700">
                            Don't have an account?{" "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => {
                                    setToggleLogin(true)
                                    setMessage("")
                                    setConfirmPasswordReg("")
                                    setEmailReg("")
                                    setPasswordReg("")
                                    setConfirmEmailReg("")
                                }}
                            >
                                Register
                            </span>
                        </p>
                    </div>
                )}

                <button
                    className="mt-2 w-full text-gray-700 p-2"
                    onClick={() => setShowLoginModel(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Login;
