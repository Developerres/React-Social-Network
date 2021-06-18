import React from "react";
import { NavLink } from "react-router-dom";
import cn from "./Dialogs.module.css";

function DialogItem(props) {
  const path = "/dialogs/" + props.id;
  return (
    <div className={cn.user}>
      <NavLink to={path} activeClassName={cn.active}>
        {props.name}
      </NavLink>
    </div>
  );
}

function MessageItem(props) {
  return <div className={cn.dialog}>{props.message}</div>;
}

function Dialogs(props) {
  const userNameList = props.dialogsPage.dialogsData.map((user) => (
    <DialogItem name={user.name} id={user.id} />
  ));

  const messageList = props.dialogsPage.messageData.map((text) => (
    <MessageItem message={text.message} />
  ));

  const newDialogText = React.createRef();

  const addNewDialogMessage = function () {
    props.addDialogMessage();
  };

  const messageOnChange = function () {
    props.uploadDialogMessage(newDialogText.current.value);
  };

  return (
    <div className={cn.pageDialogs}>
      <div className={cn.users}>{userNameList}</div>
      <div className={cn.dialogs}>
        <div>{messageList}</div>
        <div>
          <div className={cn.flex_end}>
            <textarea
              ref={newDialogText}
              onChange={messageOnChange}
              value={props.dialogsPage.messageText}
            />
            <button onClick={addNewDialogMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
