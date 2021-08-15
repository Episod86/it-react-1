import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reduser";
import { authReducer } from "./auth-reduser";
import thunk from "redux-thunk";
// import { ThunkMiddleware } from "redux-thunk";

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunk));

export default store;
