import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState(0);

  function handleChangeNumberInp(e) {
    if (e.target.value.match(/[^0-9]/g)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    return setCountInput(e.target.value);
  }

  return (
    <div className="b-count">
      <h3>Task 1</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
      <div>
        <input onChange={handleChangeNumberInp} />
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
