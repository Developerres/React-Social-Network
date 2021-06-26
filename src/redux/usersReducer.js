const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALCOUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  users: [],
  itemsCount: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state;
  }
};

export default usersReducer;

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
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
