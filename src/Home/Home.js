import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../App";

function Post() {
  const [post, setPost] = useState("");
  const [load, setLoad] = useState(null);
  const theme = useContext(ThemeContext);
  const [limitPosts, setLimitPosts] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setLoad(true);
        return setPost([...json]);
      })
      .catch((error) => console.error(error));
  }, [load, limitPosts]);
  let posts = [...post];

  return (
    <div className={`b-post ${theme}`}>
      <h3>Task 2</h3>
      {posts.map((item, index) => {
        let html;
          (index < +limitPosts) ?
            html= (
              <div className="b-post-wrap" key={item.id}>
                <h3>{item.id} {item.title}</h3>
                <p>{item.body}</p>
                <Link to={'post/' + item.id}>post link</Link>
              </div>
            ):
            html=null;
          return html;
        }
      )}
      <button onClick={()=>{setLimitPosts(limitPosts + 10)}}>Show more</button>
    </div>
  );
}

export default Post;