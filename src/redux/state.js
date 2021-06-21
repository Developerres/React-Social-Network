const ADD_POST = "ADD-POST";
const UPLOAD_POST_MESSAGE = "UPLOAD-POST-MESSAGE";
const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPLOAD_DIALOG_MESSAGE = "UPLOAD-DIALOG-MESSAGE";

const store = {
  _state: {
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
  },
  _callSubscriber() {
    // console.log("Hello");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.dialogText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.dialogText = "";
      this._callSubscriber(this._state);
    }
    if (action.type === UPLOAD_POST_MESSAGE) {
      this._state.profilePage.dialogText = action.text;
      this._callSubscriber(this._state);
    }
    if (action.type === ADD_DIALOG_MESSAGE) {
      const newDialogMessage = {
        id: 4,
        message: this._state.dialogsPage.messageText,
      };
      this._state.dialogsPage.messageData.push(newDialogMessage);
      this._state.dialogsPage.messageText = "";
      this._callSubscriber(this._state);
    }
    if (action.type === UPLOAD_DIALOG_MESSAGE) {
      this._state.dialogsPage.messageText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export default store;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const uploadPostMessageActionCreator = (text) => ({
  type: UPLOAD_POST_MESSAGE,
  text: text,
});

export const addDialogMessageActionCreator = () => ({
  type: ADD_DIALOG_MESSAGE,
});
export const uploadDialogMessageActionCreator = (text) => ({
  type: UPLOAD_DIALOG_MESSAGE,
  text: text,
});
