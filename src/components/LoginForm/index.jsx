const LoginForm = ({email, password, setColourMessage, setLoggedIn, setShowLoginModel, setUser, setMessage,
                       setEmail, setPassword, colourMessage, message, setToggleLogin, setConfirmPasswordReg, setEmailReg,
                    setPasswordReg, setConfirmEmailReg}) => {

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

        const data = await response.json()

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
                    setToggleLogin(false)
                    setMessage("")
                    setConfirmPasswordReg("")
                    setEmailReg("")
                    setPasswordReg("")
                    setConfirmEmailReg("")
                    window.scrollTo(0, 0)
                }}
            >
                                Register
            </span>
        </p>
    </div>
)
}
export default LoginForm