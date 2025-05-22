import React from 'react'
import {useState} from "react"

const CurrentDate = () => {
   
    const [datetime , setDatetime] = useState("")
    setInterval(()=>{
       const now = new Date();
       const formerDate = now.toLocaleDateString();
       const formerTime = now.toLocaleTimeString();
       setDatetime(`${formerDate} - ${formerTime}`);
    } ,1000)
  return (
    <div>
      <h1>{datetime}</h1>
    </div>
  )
}

export default CurrentDate
