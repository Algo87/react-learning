import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {ThemeContext} from "../App";
import Comments from "../Comments/Comments";

function Post() {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  let {id} = useParams();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUserId(json.userId);
        setPostTitle(json.title);
        setPostText(json.body);
      })
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((json) => {
        setUserName(json.name);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div className={`b-post ${theme}`}>
      <h3>Task 2</h3>
      <div className="b-post-wrap">
        <Link
          className="prev"
          to={+id <= 1 ? "/post/1" : "/post/" + (Number(id) - 1)}
        />
        <div className="b-post-content">
          <h1>{postTitle}</h1>
          <p>{postText}</p>
          <p>
            <span>Author: </span>
            <Link to={'/users/' + userId}>{userName}</Link>
          </p>
          <div>
            <Comments/>
          </div>
        </div>
        <Link
          className="next"
          to={+id >= 100 ? "/post/100" : "/post/" + (Number(id) + 1)}
        />
      </div>
    </div>
  );
}

export default Post;
