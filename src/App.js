import React, {useState} from "react";
import "./App.css";
import Post from "./Post/Post";
import UserList from "./UserList/UserList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    border: "1px solid #000"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    border: "1px solid #222222"
  }
};

let ThemeContext = React.createContext(themes.light);

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <Router>
      <ThemeContext.Provider value={isLightTheme ? themes.light : themes.dark}>
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
          >Change Theme Btn
          </button>
          <hr/>
          <Switch>
            <Route
              exact
              path="/post/:id"
              children={<Post ThemeContext={ThemeContext}/>}
            />
            <Route exact path="/">
              <UserList ThemeContext={ThemeContext}/>
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
