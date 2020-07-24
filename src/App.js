import React, { useState } from "react";
import Home from "./Home/Home";
import Post from "./Post/Post";
import User from "./User/User";
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
              <Link to="/users">UserList</Link>
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
            <Route path="/users/:id" component={User} />
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/post/:id" component={Post} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
