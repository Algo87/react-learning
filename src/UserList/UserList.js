import React, { useState, useEffect } from "react";

function UserList() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [load, setLoad] = useState(false);

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
    <div className="b-user-list">
      <h3>Task 3</h3>
      {load ? (
        <ul>
          {usersInfo.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserList;
