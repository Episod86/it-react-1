import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/users-reduser";
import { UsersAPI } from "../../api/api";
import Preloader from "../Commosn/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      }
    );
  }

  onPageChanged(pageNumber) {
    // debugger;
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
