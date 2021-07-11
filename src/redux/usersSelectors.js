export const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getItemsCount = (state) => {
  return state.usersPage.itemsCount;
};

export const getTotalCount = (state) => {
  return state.usersPage.totalCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInPogress = (state) => {
  return state.usersPage.followingInPogress;
};
