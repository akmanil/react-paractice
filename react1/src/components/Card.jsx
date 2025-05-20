import React, { useState } from "react";

const Card = () => {
  const name1 = "Virat Kohli";
  const name2 = "Neymar Jr.";
  
  // Using state to track likes for each card
  const [like1, setLike1] = useState(true);
  const [like2, setLike2] = useState(true);
  
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src="vk.jpg" alt="" width="100px" />
          <h1>Name : {name1}</h1>
          <button onClick={() => setLike1(!like1)}>
            {like1 ? "Liked" : "Dislike"}
          </button>
        </div>
        <div className="card">
          <img src="neymar.jpg" alt="" width="100px" />
          <h1>Name : {name2}</h1>
          <button onClick={() => setLike2(!like2)}>
            {like2 ? "Liked" : "Dislike"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;