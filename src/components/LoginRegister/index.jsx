import { useState } from "react";
import LoginForm from "../LoginForm/index.jsx";
import RegisterForm from "../RegisterForm/index.jsx";

const LoginRegister = ({ setShowLoginModel, setLoggedIn, setUser }) => {
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [confirmEmailReg, setConfirmEmailReg] = useState("")
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toggleLogin, setToggleLogin] = useState(true)
    const [message, setMessage] = useState("")
    const [colourMessage, setColourMessage] = useState('green')
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h1 className="text-xl mb-4 text-gray-700">{toggleLogin ? "Login" : "Register"}</h1>
                {toggleLogin ? (
                 <LoginForm message={message}
                            password={password}
                            email={email}
                            setPassword={setPassword}
                            setEmail={setEmail}
                            setEmailReg={setEmailReg}
                            setConfirmPasswordReg={setConfirmPasswordReg}
                            setPasswordReg={setPasswordReg}
                            setLoggedIn={setLoggedIn}
                            setColourMessage={setColourMessage}
                            colourMessage={colourMessage}
                            setConfirmEmailReg={setConfirmEmailReg}
                            setMessage={setMessage}
                            setShowLoginModel={setShowLoginModel}
                            setToggleLogin={setToggleLogin}
                            setUser={setUser}
                 />
                ) : (
                   <RegisterForm message={message}
                                 setPassword={setPassword}
                                 setEmail={setEmail}
                                 setEmailReg={setEmailReg}
                                 setConfirmPasswordReg={setConfirmPasswordReg}
                                 setPasswordReg={setPasswordReg}
                                 setColourMessage={setColourMessage}
                                 colourMessage={colourMessage}
                                 setConfirmEmailReg={setConfirmEmailReg}
                                 setMessage={setMessage}
                                 setToggleLogin={setToggleLogin}
                                 confirmPasswordReg={confirmPasswordReg}
                                 confirmEmailReg={confirmEmailReg}
                                 passwordReg={passwordReg}
                                 emailReg={emailReg}
                                 lastName={lastName}
                                 firstName={firstName}
                                 setFirstName={setFirstName}
                                 setLastName={setLastName}
                   />
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

export default LoginRegister;
