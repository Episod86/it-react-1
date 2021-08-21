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
import { compose } from "redux";
import {
  getAllUsers,
  getCurrentPage,
  getFolowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/users-selectors";

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
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowingInProgress: getFolowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
