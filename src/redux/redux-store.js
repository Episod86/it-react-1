import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reduser";
import { authReducer } from "./auth-reduser";
import thunk from "redux-thunk";
// import { reducer as formReducer } from "redux-form";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./app-reduser";

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(redusers, applyMiddleware(thunk));

export default store;
