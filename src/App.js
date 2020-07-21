import React from "react";
import "./App.css";
import Count from "./Count/Count";
import Post from "./Post/Post";
import UserList from "./UserList/UserList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Count</Link>
          </li>
          <li>
            <Link to="/post/1">Post</Link>
          </li>
          <li>
            <Link to="/userlist">UserList</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Count/>
          </Route>
          <Route
            path="/post/:id"
            children={<Post />}
          />

          <Route path="/userlist">
            <UserList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
