import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalCount,
  isFetchingToggle,
} from "../redux/usersReducer";
import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.isFetchingToggle(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users/", {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.isFetchingToggle(false);
      });
  }

  pageSelected = (el) => {
    this.props.setCurrentPage(el + 1);
    this.props.isFetchingToggle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          el + 1
        }&count=${this.props.itemsCount}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.isFetchingToggle(false);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          pageSelected={this.pageSelected}
          totalCount={this.props.totalCount}
          itemsCount={this.props.itemsCount}
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
  };
};

const mapDispatchToProps = {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalCount,
  isFetchingToggle,
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);

export default UsersContainer;
