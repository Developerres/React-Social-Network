const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPLOAD_DIALOG_MESSAGE = "UPLOAD-DIALOG-MESSAGE";

const dialogsReducer = (state, action) => {
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
