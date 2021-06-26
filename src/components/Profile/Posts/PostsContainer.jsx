import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  uploadPostMessageActionCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";

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
