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
  const dialogsData = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
  ];

  const messageData = [
    { id: 1, message: "How are you?" },
    { id: 2, message: "Hejo" },
    { id: 3, message: "Hi" },
  ];

  const userNameList = dialogsData.map((user) => (
    <DialogItem name={user.name} id={user.id} />
  ));

  const messageList = messageData.map((text) => (
    <MessageItem message={text.message} />
  ));

  return (
    <div className={cn.pageDialogs}>
      <div className={cn.users}>{userNameList}</div>
      <div className={cn.dialogs}>{messageList}</div>
    </div>
  );
}

export default Dialogs;
