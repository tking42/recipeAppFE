import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import MainDisplay from './components/MainDisplay'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    const [hide, setHide] = useState('')

    return (
        <div className="App">
            <header>
                <h1 className='mt-4 text-8xl text-center uppercase font-extrabold'>Recipe Finder</h1>
            </header>
            <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} hide={hide} />
            <MainDisplay user={user} loggedIn={loggedIn} setHide={setHide} hide={hide} />
        </div>
    )
}

export default App
