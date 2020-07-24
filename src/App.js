import React, { useState } from "react";
import Home from "./Home/Home";
import UserList from "./UserList/UserList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let ThemeContext = React.createContext("light-theme");

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
            <Route
              exact
              path="/"
              children={<Home ThemeContext={ThemeContext} />}
            />
            <Route exact path="/userlist">
              <UserList ThemeContext={ThemeContext} />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
