import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ThemeContext } from "../App";

function Post(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  let { id } = useParams();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        setPostTitle(json.title);
        setPostText(json.body);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={`b-post ${theme}`}>
      <h3>Task 2</h3>
      <div className="b-post-wrap">
        <Link to={+id <= 1 ? "/post/1" : "/post/" + (Number(id) - 1)} id="prev">
          {" "}
        </Link>
        <div className="b-post-content">
          <h1>{postTitle}</h1>
          <p>{postText}</p>
        </div>
        <Link
          to={+id >= 100 ? "/post/100" : "/post/" + (Number(id) + 1)}
          id="next"
        >
          {" "}
        </Link>
      </div>
    </div>
  );
}

export default Post;
