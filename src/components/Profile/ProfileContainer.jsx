import React from "react";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { Profile } from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withAutRedirect } from "../../hoc/ithAauthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 10;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAutRedirect
)(ProfileContainer);
