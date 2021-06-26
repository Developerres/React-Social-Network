import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerWithRouter
);
