import { usersAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default authReducer;

export const setUserAuth = (userId, email, login) => ({
  type: SET_USER_AUTH,
  data: { userId, email, login },
});

export const isLogged = () => {
  return (dispatch) => {
    usersAPI.isLogin().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserAuth(id, email, login));
      }
    });
  };
};
