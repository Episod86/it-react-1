import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reduser";
import { Users } from "./Users";


const mapStateToProps = (state) => {
// debugger
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
    
  };
};
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
