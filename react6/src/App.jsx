import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [On, setOn] = useState(true)

  const toggleSwitch =()=>{
    setOn(!On);
  }

  return (
    <>
      <div className="par" onClick= {toggleSwitch} 
      style={{backgroundColor : On ? "green" :"Red"}}>
        <div className={`chi ${On ? "on" : "off"}`}>
          <span>{On ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  )
}

export default App
