import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ThemeContext } from "../App";

function User(props) {
  let { id } = useParams();
  const theme = useContext(ThemeContext);
  let cls = ["b-user", theme].join(" ");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        return setUserInfo(json);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={`b-user ${theme}`}>
      <Link
        to={+id > 1 ? "/users/" + (+id - 1) : "/users/1"}
        className="prev"
      />
      <div className="user-info-block">
        {Object.entries(userInfo).map(([key, thread]) => {
          return Object.getPrototypeOf(userInfo[key]) ===
            Object.prototype ? null : (
            <p key={key} className="contact-name">
              {key} : {userInfo[key]}{" "}
            </p>
          );
        })}
      </div>
      <Link
        to={+id < 10 ? "/users/" + (+id + 1) : "/users/10"}
        className="next"
      />
    </div>
  );
}

export default User;
