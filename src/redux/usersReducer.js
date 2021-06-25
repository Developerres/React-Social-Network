const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";

const initialState = {
  users: [],
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
        users: [...action.users],
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SETUSERS,
  users,
});
