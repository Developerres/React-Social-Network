import React from "react";
import { Field, Form } from "react-final-form";
import { NavLink, Redirect } from "react-router-dom";
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
    <DialogItem name={user.name} id={user.id} key={user.id} />
  ));

  const messageList = props.dialogsPage.messageData.map((text) => (
    <MessageItem message={text.message} key={text.id} />
  ));

  return (
    <div className={cn.pageDialogs}>
      <div className={cn.users}>{userNameList}</div>
      <div className={cn.dialogs}>
        <div>{messageList}</div>
        <div>
          <div>
            <AddMessageForm {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  const addNewDialogMessage = (value) => {
    props.addDialogMessage(value.messageText);
    value.messageText = "";
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <Form
      onSubmit={addNewDialogMessage}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="messageText" validate={required}>
            {({ input, meta }) => (
              <div>
                <textarea
                  {...input}
                  type="textarea"
                  placeholder="Message text "
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Send
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Dialogs;
