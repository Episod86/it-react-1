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
  setFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`/profile/${userId}`);
  },
};

export const AuthAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
