import React from "react";
import { Route } from "react-router-dom";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderContainer";

import "./App.css";
const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderConteiner />
      <Sidebar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
