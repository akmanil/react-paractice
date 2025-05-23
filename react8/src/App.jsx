import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UseState from './Components/Hooks/UseState'
import SignupForm from "./Components/Hooks/SignupForm"
import UseEffect from './Components/Hooks/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <UseState /> */}
     <SignupForm />
     <UseEffect />
    </>
  )
}

export default App
