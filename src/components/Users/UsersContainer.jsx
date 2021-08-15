import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/users-reduser";

import Preloader from "../Commosn/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(pageNumber) {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          props={this.props}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          setCurrentPage={this.props.setCurrentPage}
          followingInProgress={this.props.folowingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    folowingInProgress: state.usersPage.folowingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
