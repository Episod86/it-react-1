import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";

import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer />}
        />
      </div>
    </div>
  );
};

export default App;
