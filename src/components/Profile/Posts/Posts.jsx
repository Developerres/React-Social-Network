import React from "react";
import {
  addPostActionCreator,
  uploadPostMessageActionCreator,
} from "../../../redux/profileReducer";
import Post from "./Post/Post";
import cn from "./Posts.module.css";

function Posts(props) {
  const addNewPost = function () {
    props.dispatch(addPostActionCreator());
  };

  const postOnChange = function (e) {
    const text = e.target.value;
    props.dispatch(uploadPostMessageActionCreator(text));
  };

  const postRender = props.profilePage.postData.map((text) => (
    <Post message={text.message} likes={text.likesCount} />
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
