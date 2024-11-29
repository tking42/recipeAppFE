import {useState} from "react";

const Login = () => {

    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3002/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailReg,
                passwordReg
            }),
        })

        if (response.ok) {
            alert("Registration successful!");
        } else {
            alert("Registration failed!");
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3002/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()


        if (response.ok) {
            alert(`Login successful! Welcome ${data.email}`);
        } else {
            alert(data.errorMessage)
        }
    }

    return (
        <div className='flex justify-center m-12 text-gray-700'>
            <div>
                <h1>
                    Registration
                </h1>
                <label>Email</label>
                <input type='email' onChange={(e) => {setEmailReg(e.target.value)}}/>
                <label>Password</label>
                <input type='password'  onChange={(e) => {setPasswordReg(e.target.value)}}/>
                <button onClick={handleRegister}>Register</button>
            </div>

            <div>
                <h1>
                    Login
                </h1>
                <input type='text' placeholder='Email...' onChange={(e) => {setEmail(e.target.value)}}/>
                <input type='password' placeholder='Password...' onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login