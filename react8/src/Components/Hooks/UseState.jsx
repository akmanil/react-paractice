import React, { useState } from 'react';
import "./UseState.css";

const UseState = () => {
  const [isOn, setIsOn] = useState(false); // Initial state: bulb is OFF

  const handleClick = () => {
    setIsOn(!isOn); // Toggle state (true/false)
  };

  return (
    <div className="container">
      {/* Add 'on' class conditionally based on state */}
      <div className={`bulb ${isOn ? 'on' : ''}`}></div>
      <div className={`bulb-light ${isOn ? 'on' : ''}`}></div>
      <button onClick={handleClick}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default UseState;