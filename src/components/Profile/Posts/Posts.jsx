import React from "react";
import Post from "./Post/Post";
import cn from "./Posts.module.css";

function Posts(props) {
  const newPostText = React.createRef();

  const addNewPost = function () {
    props.addPost();
    newPostText.current.value = "";
  };

  const postOnChange = function () {
    props.uploadPostMessage(newPostText.current.value);
  };

  const postRender = props.profilePage.postData.map((text) => (
    <Post message={text.message} likes={text.likesCount} />
  ));

  return (
    <div className={cn.posts}>
      <h3> My posts</h3>

      <div className={cn.flex_end}>
        <textarea
          ref={newPostText}
          onChange={postOnChange}
          value={props.profilePage.dialogText}
        />
        <button onClick={addNewPost}>Send</button>
      </div>
      <div>{postRender}</div>
    </div>
  );
}

export default Posts;
