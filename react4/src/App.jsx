import { useState } from "react";
import "./App.css";
import Props, { Prop1, Prop2, Card , Prop3 , GrandParent} from "./components/Prop";

function App() {
  let greet = () =>{
    return alert("Hey");
  }
  return (
    <>
      <Card>
        <Props name="Anil" />
        <Prop1 name1="Sunil" />
      </Card>
        <Prop2 name2="sipu" std="12th Arts" college="nabaghana" />
        <Prop3 onGreet = {greet} />
        <GrandParent user = "Trinatha" />
      
    </>
  );
}

export default App;
