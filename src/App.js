import React, { useState } from "react";
import Home from "./Home/Home";
import Post from "./Post/Post";
import UserList from "./UserList/UserList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const ThemeContext = React.createContext("light-theme");

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <Router>
      <ThemeContext.Provider
        value={isLightTheme ? "light-theme" : "dark-theme"}
      >
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post/1">Post</Link>
            </li>
            <li>
              <Link to="/userlist">UserList</Link>
            </li>
          </ul>
          <button
            className="theme-btn"
            onClick={() => setIsLightTheme(!isLightTheme)}
          >
            Change Theme Btn
          </button>
          <hr />
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route exact path="/userlist" children={<UserList />} />
            <Route exact path="/post/:id" children={<Post />} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
