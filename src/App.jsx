import './App.css'
import { useState } from 'react'
import Nav from './components/Nav/index.jsx'
import MainDisplay from './components/MainDisplay/index.jsx'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    const [hide, setHide] = useState('')
    const [hideWhenUseSearch, setHideWhenUseSearch] = useState('')
    const [userRecipes, setUserRecipes] = useState([])

    const getSavedRecipes = async () => {
        const user_id = user.id
        const response = await fetch(`https://recipefinder.2024-thomask.dev.io-academy.uk/getSavedRecipes?user_id=${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        setUserRecipes(data.results)
    }

    return (
        <div className="App">
            <h1 className='mt-4 text-8xl text-center uppercase font-extrabold'>Recipe Finder</h1>
            <Nav user={user}
                 setUser={setUser}
                 loggedIn={loggedIn}
                 setLoggedIn={setLoggedIn}
                 hide={hide}
                 setHideWhenUseSearch={setHideWhenUseSearch}
                 hideWhenUseSearch={hideWhenUseSearch}
                 getSavedRecipes={getSavedRecipes}
                 userRecipes={userRecipes}/>
            <MainDisplay user={user}
                         userRecipes={userRecipes}
                         loggedIn={loggedIn}
                         setHide={setHide}
                         hide={hide}
                         setHideWhenUseSearch={hideWhenUseSearch}
                         getSavedRecipes={getSavedRecipes}/>
        </div>
    )
}

export default App
