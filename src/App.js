import React, { useState } from "react";
import "./App.css";

function App() {
  // text переменная которая хранит данные, setText функция которая меняет text,
  // никогда не меняй text напрямую! используй setText
  // text = value неправильно
  // setText(value) правильно
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />

      <button onClick={() => alert(text)}>Show text</button>
    </div>
  );
}

export default App;
