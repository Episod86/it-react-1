import React from "react";

import { connect } from "react-redux";

import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/auth-reduser";

class HeaderConteiner extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderConteiner
);
