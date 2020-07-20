import React from "react";
import "./App.css";
import Count from "./Count/Count";
import Post from "./Post/Post";
import UserList from "./UserList/UserList";

function App() {
  return (
    <div className="App">
      <Count />
      <Post />
      <UserList />
    </div>
  );
}

export default App;
