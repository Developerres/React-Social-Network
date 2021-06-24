import React from "react";
import {
  addDialogMessageActionCreator,
  uploadDialogMessageActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  const state = props.store.getState();
  const addNewDialogMessage = function () {
    props.store.dispatch(addDialogMessageActionCreator());
  };

  const messageOnChange = function (text) {
    props.store.dispatch(uploadDialogMessageActionCreator(text));
  };

  return (
    <Dialogs
      uploadDialogMessage={messageOnChange}
      addDialogMessage={addNewDialogMessage}
      dialogsPage={state.dialogsPage}
    />
  );
}

export default DialogsContainer;
