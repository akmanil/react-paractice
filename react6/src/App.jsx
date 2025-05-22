import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [On, setOn] = useState(true);

  const toggleSwitch = () => {
    setOn(!On);
  };

  return (
    <>
      <div style={{ backgroundColor: On ? "Black" : "White" }} className="body">
        <div
          className="par"
          onClick={toggleSwitch}
          style={{ backgroundColor: On ? "green" : "Red" }}
        >
          <div className={`chi ${On ? "on" : "off"}`}>
            <span>{On ? "Dark" : "Light"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
