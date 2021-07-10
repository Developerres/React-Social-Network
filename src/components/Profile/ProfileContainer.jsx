import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getProfileThunk } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getProfileThunk(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getProfileThunk }),
  withRouter
)(ProfileContainer);

// const ProfileContainerWithRouter = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUserProfile, getProfileThunk })(
//   ProfileContainerWithRouter
// );
