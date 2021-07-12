import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../helpers/objectHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALCOUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  itemsCount: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInPogress: [],
};

const someFunc = (items, id, userId, { obj }) => {
  items.map((us) => {
    if (us[id] === userId) {
      return {
        ...us,
        ...obj,
      };
    }
    return us;
  });
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SETUSERS:
      return {
        ...state,
        users: action.users,
      };
    case SETCURRENTPAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SETTOTALCOUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInPogress: action.isFetching
          ? [...state.followingInPogress, action.userId]
          : state.followingInPogress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SETUSERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SETCURRENTPAGE,
  currentPage,
});

export const setTotalCount = (totalCount) => ({
  type: SETTOTALCOUNT,
  totalCount,
});

export const isFetchingToggle = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, itemsCount) => async (dispatch) => {
  dispatch(isFetchingToggle(true));
  const data = await usersAPI.getUsersAPI(currentPage, itemsCount);

  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(isFetchingToggle(false));
};

export const getUsersFromPage = (el, itemsCount) => async (dispatch) => {
  dispatch(setCurrentPage(el + 1));
  dispatch(isFetchingToggle(true));

  const data = await usersAPI.getUsersAPI(el + 1, itemsCount);

  dispatch(setUsers(data.items));
  dispatch(isFetchingToggle(false));
};

export const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));
  }
};

export const followThunk = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followAPI.bind(usersAPI),
    followSuccess
  );
};

export const unfollowThunk = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowAPI.bind(usersAPI),
    unfollowSuccess
  );
};
