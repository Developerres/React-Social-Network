let rerenderEntireTree = () => {
  // console.log("Hello");
};

const state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi. How are you?", likesCount: 15 },
      { id: 2, message: "Hey. I'm fine. And you?", likesCount: 20 },
    ],
    dialogText: "",
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
      { id: 4, name: "User 4" },
      { id: 5, name: "User 5" },
    ],
    messageData: [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Hejo" },
      { id: 3, message: "Hi" },
    ],
    messageText: "",
  },
};

export default state;

export const addPost = function () {
  const newPost = {
    id: 5,
    message: state.profilePage.dialogText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.dialogText = "";
  rerenderEntireTree(state);
};

export const uploadPostMessage = function (text) {
  state.profilePage.dialogText = text;
  rerenderEntireTree(state);
};

export const addDialogMessage = function () {
  const newDialogMessage = {
    id: 4,
    message: state.dialogsPage.messageText,
  };
  state.dialogsPage.messageData.push(newDialogMessage);
  state.dialogsPage.messageText = "";
  rerenderEntireTree(state);
};

export const uploadDialogMessage = function (text) {
  state.dialogsPage.messageText = text;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
