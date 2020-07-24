import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {ThemeContext} from "../App";

function Comments() {

  const [commentsArr, setCommentsFrr] = useState([]);
  const theme = useContext(ThemeContext);
  let {id} = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => {
        let needCommentsArr = [];
        json.forEach(function (itm) {
          if (+itm.postId === +id) {
            needCommentsArr.push(itm);
          }
        });
        setCommentsFrr(needCommentsArr);
      })
  }, [id]);

  return (
    <div className={`b-post ${theme}`}>
      <h4>Comments:</h4>
      {(commentsArr).map((itm) => {
          return (
            <div className="b-comment" key={itm.id}>
              <h5>{itm.name} {itm.postId}</h5>
              <p>{itm.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments