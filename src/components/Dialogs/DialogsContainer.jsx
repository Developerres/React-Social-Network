import React from "react";
import { connect } from "react-redux";
import {
  addDialogMessageActionCreator,
  uploadDialogMessageActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadDialogMessage: (text) => {
      dispatch(uploadDialogMessageActionCreator(text));
    },
    addDialogMessage: () => {
      dispatch(addDialogMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
