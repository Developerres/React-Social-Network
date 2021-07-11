import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (messageText) => {
      dispatch(addPostActionCreator(messageText));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
