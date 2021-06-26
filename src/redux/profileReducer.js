const ADD_POST = "ADD-POST";
const UPLOAD_POST_MESSAGE = "UPLOAD-POST-MESSAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  postData: [
    { id: 1, message: "Hi. How are you?", likesCount: 15 },
    { id: 2, message: "Hey. I'm fine. And you?", likesCount: 20 },
  ],
  dialogText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 5,
            message: state.dialogText,
            likesCount: 0,
          },
        ],
        dialogText: "",
      };
    case UPLOAD_POST_MESSAGE:
      return {
        ...state,
        dialogText: action.text,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
