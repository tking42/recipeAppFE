import './App.css'
import Nav from "./components/Nav";
import Header from "./components/Header";
import {useState} from "react";

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    const [hide, setHide] = useState('')

  return (
      <body>
      <h1 className='mt-4 text-8xl text-center uppercase font-extrabold'>Recipe Finder</h1>
      <Nav setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} hide={hide}></Nav>
      <Header user={user} loggedIn={loggedIn} setHide={setHide} hide={hide}></Header>
      </body>
  )
}

export default App
