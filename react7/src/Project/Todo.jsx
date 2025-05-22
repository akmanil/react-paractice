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
                        <input type="text" value = {typedValue} className ="inputValue"/>
                        <button><MdDoneOutline /></button>
                        <button> <MdDelete /></button>
                    </li>
                    
                }
            )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
