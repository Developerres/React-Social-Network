import { connect } from "react-redux";
import Users from "./Users";
import {
  followSuccess,
  unfollowSuccess,
  getUsers,
  getUsersFromPage,
  followThunk,
  unfollowThunk,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.itemsCount);
  }

  pageSelected = (el) => {
    this.props.getUsersFromPage(el, this.props.itemsCount);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.followThunk}
          unfollow={this.props.unfollowThunk}
          currentPage={this.props.currentPage}
          pageSelected={this.pageSelected}
          totalCount={this.props.totalCount}
          itemsCount={this.props.itemsCount}
          followingInPogress={this.props.followingInPogress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    itemsCount: state.usersPage.itemsCount,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInPogress: state.usersPage.followingInPogress,
  };
};

const mapDispatchToProps = {
  followSuccess,
  unfollowSuccess,
  getUsers,
  followThunk,
  unfollowThunk,
  getUsersFromPage,
  toggleFollowingProgress,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPIContainer);
