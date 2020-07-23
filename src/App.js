import React, {useState} from "react";
import Post from "./Post/Post";
import UserList from "./UserList/UserList";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let ThemeContext = React.createContext("light-theme");

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <Router>
      <ThemeContext.Provider value={isLightTheme ? 'light-theme' : 'dark-theme'}>
        <div>
          <ul>
            <li>
              <Link to="/">Post</Link>
            </li>
            <li>
              <Link to="/userlist">UserList</Link>
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
              path="/"
              children={<Post ThemeContext={ThemeContext}/>}
            />
            <Route exact path="/userlist">
              <UserList ThemeContext={ThemeContext}/>
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
