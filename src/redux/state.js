import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
