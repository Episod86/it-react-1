import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "459ae485-0486-4ece-a32f-b394969a0845",
  },
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const FollowAPI = {
  setFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
      return response.data;
    });
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
