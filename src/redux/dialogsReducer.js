const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPLOAD_DIALOG_MESSAGE = "UPLOAD-DIALOG-MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG_MESSAGE:
      const newDialogMessage = {
        id: 4,
        message: state.messageText,
      };
      state.messageData.push(newDialogMessage);
      state.messageText = "";

      return state;
    case UPLOAD_DIALOG_MESSAGE:
      state.messageText = action.text;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;

export const addDialogMessageActionCreator = () => ({
  type: ADD_DIALOG_MESSAGE,
});
export const uploadDialogMessageActionCreator = (text) => ({
  type: UPLOAD_DIALOG_MESSAGE,
  text: text,
});
