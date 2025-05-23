import React from 'react'
import {useState ,useEffect} from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0);

    useEffect(()=>{
          console.log("The count is : " , count)
    } , [count])
    const handelChange = () =>{
        setCount(count+1)
    }
  return (
    <div>
       <h1>useEffect and useState hook</h1>
       <h2>The count is {count}</h2>
       <button onClick = {handelChange}>+ Increment</button>
    </div>
  )
}

export default UseEffect
