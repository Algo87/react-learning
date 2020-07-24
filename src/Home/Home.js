import React, { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../App";

function Post(props) {
  const [post, setPost] = useState("");
  const [load, setLoad] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setLoad(true);
        let textArr = [];
        for (let i = 0; i < 10; i++) {
          textArr[i] = json[i];
        }
        return setPost(textArr);
      })
      .catch((error) => console.error(error));
  }, [load]);
  let posts = [...post];

  return (
    <div className={`b-post ${theme}`}>
      <h3>Task 2</h3>
      {posts.map((item) => (
        <div className="b-post-wrap" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
