import { useState } from "react";

const Login = ({setShowLoginModel}) => {
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toggleLogin, setToggleLogin] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3002/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailReg,
                passwordReg,
            }),
        });

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert('Registration failed')
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

        if (response.ok) {
            alert(`Login successful! Welcome ${data.email}`)
        } else {
            alert('Email or Password incorrect')
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h1 className="text-xl mb-4 text-gray-700">{toggleLogin ? "Registration" : "Login"}</h1>
                {toggleLogin ? (
                    <div className='text-gray-700'>
                        <input
                            type="email"
                            className="border p-2 w-full mb-2"
                            placeholder='Email'
                            value={emailReg}
                            onChange={(e) => setEmailReg(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            className="border p-2 w-full mb-4"
                            value={passwordReg}
                            onChange={(e) => setPasswordReg(e.target.value)}
                        />
                        <button
                            className="w-full bg-blue-500 text-white p-2"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                        <p className="mt-4 text-center text-gray-700">
                            Already have an account?{" "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setToggleLogin(false)}
                            >
                Log In
              </span>
                        </p>
                    </div>
                ) : (
                    <div className='text-gray-700'>
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
                        <p className="mt-4 text-center text-gray-700">
                            Don't have an account?{" "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setToggleLogin(true)}
                            >
                Register
              </span>
                        </p>
                    </div>
                )}

                <button
                    className="mt-2 w-full text-gray-700 p-2" onClick={() => setShowLoginModel(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Login
