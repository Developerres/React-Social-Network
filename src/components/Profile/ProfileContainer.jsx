import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setUserProfile,
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
      //userId = 17963;
    }

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        ptofile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk,
  }),
  withRouter
)(ProfileContainer);
