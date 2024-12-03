import './App.css'
import Nav from "./components/Nav";
import Header from "./components/Header";
import {useState} from "react";

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
  return (
      <body>
      <Nav user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
      <h1 className='text-9xl text-center uppercase font-extrabold'>Recipe Finder</h1>
      <Header user={user} setUser={setUser} loggedIn={loggedIn}></Header>
      </body>
  )
}

export default App
