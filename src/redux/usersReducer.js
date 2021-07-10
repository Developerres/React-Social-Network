import { usersAPI } from "../api/api";

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

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((us) => {
          if (us.id === action.userId) {
            return {
              ...us,
              followed: true,
            };
          }
          return us;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((us) => {
          if (us.id === action.userId) {
            return {
              ...us,
              followed: false,
            };
          }
          return us;
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

export const getUsers = (currentPage, itemsCount) => {
  return (dispatch) => {
    dispatch(isFetchingToggle(true));
    usersAPI.getUsersAPI(currentPage, itemsCount).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(isFetchingToggle(false));
    });
  };
};

export const getUsersFromPage = (el, itemsCount) => {
  return (dispatch) => {
    dispatch(setCurrentPage(el + 1));
    dispatch(isFetchingToggle(true));

    usersAPI.getUsersAPI(el + 1, itemsCount).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(isFetchingToggle(false));
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followAPI(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
      }
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    usersAPI.unfollowAPI(userId).then((response) => {
      dispatch(toggleFollowingProgress(true, userId));
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
      }
    });
  };
};
