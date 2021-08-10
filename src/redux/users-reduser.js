const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
    // { id: '1', followed: false, fullName: 'Aleksey', status: 'I am boss', location: {city: Minsk, country: 'Belarus'} },
    // { id: '2', followed: true, fullName: 'Ivan', status: 'I am student', location: {city: Moscow, country: 'Russia'} },
    // { id: '3', followed: false, fullName: 'Elisey', status: 'I am student', location: {city: Brussels, country: 'Belgium'} },
  ],
};

export const usersReducer = (state = initialState, action) => {
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
