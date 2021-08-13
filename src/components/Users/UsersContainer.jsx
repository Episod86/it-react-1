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
} from "../../redux/users-reduser";
import { UsersAPI } from "../../api/api";
// import { UsersAPI } from "../../api/api";
// import Preloader from "../Commons/Preloader/Preloader";

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
    this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      debugger;
      // this.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  }

  render() {
    return (
      <>
        {/* {this.props.isFetching ? <Preloader /> : null} */}

        <Users
          props={this.props}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // isFetching={this.props.isFetching}
          onPageChanged={this.onPageChanged}
          // props={this.props}
          // setCurrentPage={this.props.setCurrentPage}
          // toggleIsFetching={this.props.toggleIsFetching}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
