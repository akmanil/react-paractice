import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count ,setCount] = useState(0);
  
  const Event = () =>{
   setCount(count+1);

  }
  const Enter = () =>{
    alert("its btn 2")
  }  
  return (
    <>
      <div className ="flex flex-col">
      <button onClick={() =>Event()}>Click {count}</button>
      <button onMouseEnter={() =>Enter()}>Click</button>
      </div>
    </>
  )
}

export default App
