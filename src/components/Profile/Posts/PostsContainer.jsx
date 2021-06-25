import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  uploadPostMessageActionCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";

// function PostsContainer(props) {
//   const state = props.store.getState();

//   const addNewPost = function () {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const postOnChange = function (text) {
//     props.store.dispatch(uploadPostMessageActionCreator(text));
//   };

//   return (
//     <Posts
//       uploadPostMessage={postOnChange}
//       addPost={addNewPost}
//       profilePage={state.profilePage}
//     />
//   );
// }

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPostMessage: (text) => {
      dispatch(uploadPostMessageActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
