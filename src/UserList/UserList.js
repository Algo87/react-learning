import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../App";

function UserList(props) {
  const [usersInfo, setUsersInfo] = useState([]);
  const [load, setLoad] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoad(true);
        return setUsersInfo(json);
      })
      .catch((error) => console.error(error));
  }, [load]);

  return (
    <div className={`b-user-list ${theme}`}>
      <h3>Task 3</h3>
      {load ? (
        <ul>
          {usersInfo.map((item) => (
            <li key={item.id}>
              <Link to={"/users/" + item.id}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserList;
