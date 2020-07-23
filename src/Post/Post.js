import React, {useState, useEffect, useContext} from "react";


function Post(props) {
  const [text, setText] = useState("");
  const [load, setLoad] = useState(null);

  const theme = useContext(props.ThemeContext);
  let clsArr = ['b-post'];
  clsArr.push(theme);
  let cls = clsArr.join(' ');


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setLoad(true);
        let textArr = [];
        for (let i = 0; i < 10; i++) {
          textArr[i] = json[i];
        }
        return setText(textArr);
      })
      .catch((error) => console.error(error))
  }, [load]);
  let test = [...text];


  return (
    <div className={cls}>
      <h3>Task 2</h3>

      {test.map((item) => (
        <div className="b-post-wrap" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>

  );
}

export default Post;
