import React, {useState} from "react";
import './Post.css';

function Post() {

    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');

    function handleGetPost() {

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                setPostTitle(json.title);
                setPostText(json.body);
            });
    }

    return (
        <div className="b-post">
            <h3>Task 2</h3>
            <button onClick={handleGetPost}>Show post</button>
            <h1>{postTitle}</h1>
            <p>{postText}</p>
        </div>
    )

}

export default Post;