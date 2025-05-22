import React, { useState } from 'react';

const State1 = () => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <div>
        <p>
          {users[currentIndex].name}, {users[currentIndex].age} years old
        </p>
        <button onClick={prevUser} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={nextUser} disabled={currentIndex === users.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default State1;