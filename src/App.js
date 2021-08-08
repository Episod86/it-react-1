import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

import "./App.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
      </div>
    </div>
  );
};

export default App;
