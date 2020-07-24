import React, { useState } from "react";
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
              <Link to="/">UserList</Link>
            </li>
            <li>
              <Link to="/post/1">Post</Link>
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
            <Route exact path="/post/:id" children={<Post />} />
            <Route exact path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
