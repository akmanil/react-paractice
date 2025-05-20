import React from "react";

const Prop = (props) => {
  return (
    <>
      <h1>My name is {props.name}</h1>
    </>
  );
};

export default Prop;

// destructring the props

export let Prop1 = ({ name1 }) => {
  return (
    <>
      <h2>My brothers name is {name1}</h2>
    </>
  );
};

//passing multiple props in one function

export let Prop2 = ({ name2, std, college }) => {
  return (
    <>
      <h3>Name : {name2}</h3>
      <h3>Class : {std}</h3>
      <h3>College : {college}</h3>
    </>
  );
};

// props has children
// using this we can create a div with class where it wrap

export let Card = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
    </>
  );
};

//passing the callbacks using props

export let Prop3 = ({onGreet}) =>{
    return (
        <>
          <button onClick ={onGreet}>Click Me</button>
        </>
    )
}
 
//Prop drilling - intermediate component doesnot required that props but we will pass the props or data trough multiple layer thats called prop drilling
// to fix that we need to wrap that with createContext and useContext

//1st we learn the actuall prop drilling

export let GrandParent =({user}) =>{
   return(
    <>
       <Parent user = {user} />
    </>
   )
}
export let Parent =({user})=>{
    return(
     <>
      <Child user = {user } />
    </>
    )
}
export let Child =({user})=>{
    return (
        <>
          <h1>Hello ,{user}</h1>
        </>
    )
}