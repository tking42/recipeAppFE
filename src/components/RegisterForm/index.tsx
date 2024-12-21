const RegisterForm = ({emailReg, passwordReg, confirmEmailReg, confirmPasswordReg, setColourMessage, setMessage, setEmail,
                          setPassword, colourMessage, message, setToggleLogin, setConfirmPasswordReg, setEmailReg,
                          setPasswordReg, setConfirmEmailReg}) => {
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
    }

    return (
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
                        setToggleLogin(true);
                        setMessage("")
                        setEmail("")
                        setPassword("")
                    }}
                >
                                Log In
                            </span>
            </p>
        </div>
    )
}

export default RegisterForm