const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((us) => {
            if (us.id === action.userId) {
              return { ...us, followed: true };
            } else return { ...us };
          }),
        ],
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((us) => {
            if (us.id === action.userId) {
              return { ...us, followed: false };
            } else return { ...us };
          }),
        ],
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
