import React from "react";
import {
  addPostActionCreator,
  uploadPostMessageActionCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";

function PostsContainer(props) {
  const state = props.store.getState();

  const addNewPost = function () {
    props.store.dispatch(addPostActionCreator());
  };

  const postOnChange = function (text) {
    props.store.dispatch(uploadPostMessageActionCreator(text));
  };

  return (
    <Posts
      uploadPostMessage={postOnChange}
      addPost={addNewPost}
      profilePage={state.profilePage}
    />
  );
}

export default PostsContainer;
