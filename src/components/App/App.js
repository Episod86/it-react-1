import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { Sidebar } from "../Sidebar/Sidebar";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderConteiner from "../Header/HeaderContainer";
import Preloader from "../Commons/Preloader";
import Login from "../Login/Login";
import { initialisedApp } from "../../redux/app-reduser";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.initialisedApp();
  }
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderConteiner />

        <Sidebar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <ProfileContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            {/* <Route path="/dialogs" render={() => <DialogsContainer />} /> */}
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});
export default compose(
  connect(mapStateToProps, { initialisedApp }),
  withRouter
)(App);
