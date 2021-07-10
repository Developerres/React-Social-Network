import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "98318856-f66a-4c36-af4b-5649d3dc63a8" },
});

export const usersAPI = {
  getUsersAPI(currentPage = 1, itemsCount = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${itemsCount}`)
      .then((response) => {
        return response.data;
      });
  },

  followAPI(userId = 1) {
    return instance.post(`follow/${userId}`);
  },

  unfollowAPI(userId = 1) {
    return instance.delete(`follow/${userId}`);
  },

  isLogin() {
    return instance.get(`/auth/me`);
  },

  getProfile(userId = 1) {
    return instance.get(`/profile/${userId}`);
  },
};
