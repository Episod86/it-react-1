import { UsersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  folowingInProgress: [],
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
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        folowingInProgress: action.isFetching
          ? [...state.folowingInProgress, action.userId]
          : state.folowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    UsersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    UsersAPI.setFollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSucces(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    UsersAPI.setUnfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSucces(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
