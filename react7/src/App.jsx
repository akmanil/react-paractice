import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './App.css'
import Todo from './Project/Todo'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     
      <Todo></Todo>
      
   </>
  )
}

export default App
