import { authAPI } from "../api/api";

const SET_USER_AUTH = "social-network/auth/SET_USER_AUTH";

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

export const isLogged = () => async (dispatch) => {
  const response = await authAPI.isLogin();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setUserAuth(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(isLogged());
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setUserAuth(null, null, null, false));
  }
};
