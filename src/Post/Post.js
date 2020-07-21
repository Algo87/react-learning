import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Post() {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postId, setpostId] = useState(1);
  const [isNextDisabled, setIsNextDesabled] = useState(false);
  const [isPrevDisabled, setIsPrevDesabled] = useState(true);
  let {id} = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => response.json())
      .then((json) => {
        setPostTitle(json.title);
        setPostText(json.body);
      })
      .catch((error) => console.error(error))
  }, [postId]);

  function handleClickNext() {
    if (+postId >= 100) {
      setIsNextDesabled(true);
    } else {
      setIsNextDesabled(false);
      setpostId(+(postId) + 1);
    }
  }

  function handleClickPrev() {
    if (+postId === 1) {
      setIsPrevDesabled(true)
    } else {
      setIsPrevDesabled(false)
      setpostId(+(postId) - 1);
    }
  }

  return (
    <div className="b-post">
      <h3>Task 2</h3>
      <h3>ID:git{id}</h3>
      <div className="b-post-wrap">
        <Router>
          <Link to={"/post/" + postId} onClick={handleClickPrev} id="prev" disabled={isPrevDisabled}></Link>
          <Switch>
            <Route path="/post">
              <div className="b-post-content">
                <h1>{postTitle}</h1>
                <p>{postText}</p>
              </div>
            </Route>
          </Switch>
          <Link to={"/post/" + postId} onClick={handleClickNext} id="next" disabled={isNextDisabled}></Link>
        </Router>
      </div>
    </div>
  );
}

export default Post;
