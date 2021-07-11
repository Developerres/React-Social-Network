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
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInPogress,
  getIsFetching,
  getItemsCount,
  getTotalCount,
  getUsersSelector,
} from "../../redux/usersSelectors";

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
    users: getUsersSelector(state),
    itemsCount: getItemsCount(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInPogress: getFollowingInPogress(state),
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
