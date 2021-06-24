const ADD_POST = "ADD-POST";
const UPLOAD_POST_MESSAGE = "UPLOAD-POST-MESSAGE";

const initialState = {
  postData: [
    { id: 1, message: "Hi. How are you?", likesCount: 15 },
    { id: 2, message: "Hey. I'm fine. And you?", likesCount: 20 },
  ],
  dialogText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.dialogText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.dialogText = "";
      return state;
    case UPLOAD_POST_MESSAGE:
      state.dialogText = action.text;
      return state;

    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const uploadPostMessageActionCreator = (text) => ({
  type: UPLOAD_POST_MESSAGE,
  text: text,
});
