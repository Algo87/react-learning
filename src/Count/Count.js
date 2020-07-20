import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState("");

  // function handleChangeNumberInp(e) {
  //   if (e.target.value.match(/[^0-9]/g)) {
  //     e.target.value = e.target.value.replace(/[^0-9]/g, "");
  //   }
  //   return setCountInput(e.target.value);
  // }

  // \d тоже самое что и [0-9], * это любое кол-во символов,
  // ^ это начало строки, $ это конец
  // Мы меняем значение только если это число, иначе ничего не делаем
  // Код получается короче и понятнее, и мы не делаем лишних операций

  function handleChangeNumberInp(e) {
    if (/^\d*$/.test(e.target.value)) {
      return setCountInput(e.target.value);
    }
  }

  return (
    <div className="b-count">
      <h3>Task 1</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
      <div>
        {/* Я добавил в input value={countInput} чтобы input был контролируемый */}
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
