import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Profile } from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";

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

const WithUrlDataConConteinerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataConConteinerComponent
);
