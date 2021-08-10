const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = { 
  users: [ ]
};

export const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [...state.users.map((us) => {
          if (us.id===action.userId) {
            return {...us, followed: true }
          }  
        })],
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [...state.users.map((us) => {
          if (us.id===action.userId) {
            return {...us, followed: false }
          }  
        })],
      };

      case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
