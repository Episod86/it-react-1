import React from "react";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { Profile } from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withAutRedirect } from "../../hoc/ithAauthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 10;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponeny = withAutRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithUrlDataConConteinerComponent = withRouter(AuthRedirectComponeny);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataConConteinerComponent
);
