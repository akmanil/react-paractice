import React, {useState} from 'react'

const State = () => {
    // let val = 0;
    let [val , setVal] = useState(0);
    let Increment = () =>{
        // val++;
        setVal(() => val +1)
    }
    let Decrement = () =>{
        // val--
        setVal(() => val -1)
    }
    let Reset = () =>{
        // val--
        setVal(() => 0)
    }
  return (
    <div>
       <h1>{val}</h1>
        <button onClick = {Decrement}>Decr -</button>
        <button onClick = {Reset}>Reset</button>
         <button onClick = {Increment}>Incr +</button>
         
      
    </div>
  )
}

export default State
