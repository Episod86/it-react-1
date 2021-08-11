import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reduser";
import { Users } from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
