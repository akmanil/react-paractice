import React from "react";
import { useState } from "react";
import { MdDoneOutline , MdDelete } from "react-icons/md";
import "./Todo.css"
import CurrentDate from "./CurrentDate";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  let inputChange = (value) => {
    setInputValue(value);
  };
  let collectData = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    if (data.includes(inputValue)) {
        setInputValue("")
        return;}
    setData((prevData) => [...prevData, inputValue]);
    setInputValue("");
  };
  let handleDeleteTodo = (value) =>{
    const updateData = data.filter((currentData)=> currentData !== value);
    setData(updateData);
  }
  const clearAllData =()=>{
    setData([])
  }
  return (
    <div>
      <h1>ToDo App</h1>
      <h6><CurrentDate /></h6>
      <form action="" onSubmit={collectData}>
        <input
          type="text"
          className="input"
          placeholder="Type For Input"
          value={inputValue}
          autoComplete="off"
          onChange={(e) => inputChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        <ul>
            {data.map(
                (typedValue,index)=>{
                    return<li key ={index}>
                        {/* <span className="addingValue">{typedValue}</span> */}
                        <span className ="inputValue">{typedValue}</span>
                        <button 
                        onClick={()=>handleDeleteTodo(typedValue)}> <MdDelete /></button>
                    </li>
                    
                }
            )}
        </ul>
        <button style={{backgroundColor:"Red"}}
        onClick={clearAllData}>Clear All</button>
      </div>
    </div>
  );
};

export default Todo;
