import React from "react";
import Post from "./Post/Post";
import cn from "./Posts.module.css";

function Posts(props) {
  const addNewPost = function () {
    props.addPost();
  };

  const postOnChange = function (e) {
    const text = e.target.value;
    props.uploadPostMessage(text);
  };

  const postRender = props.profilePage.postData.map((text) => (
    <Post message={text.message} likes={text.likesCount} key={text.id} />
  ));

  return (
    <div className={cn.posts}>
      <h3> My posts</h3>

      <div className={cn.flex_end}>
        <textarea
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
