import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState(0);

  return (
    <div className="b-count">
      <h3>Task 1</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
      <div>
        <input onChange={(e) => setCountInput(e.target.value)} />

        <button onClick={() => setCount(count + +countInput)}>
          {" "}
          count + inputValue
        </button>
      </div>
      <p className="result">Result: {count}</p>
    </div>
  );
}

export default Count;
