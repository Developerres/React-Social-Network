import { authAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

export const setUserAuth = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH,
  payload: { userId, email, login, isAuth },
});

export const isLogged = () => {
  return (dispatch) => {
    return authAPI.isLogin().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserAuth(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(isLogged());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
      }
    });
  };
};
