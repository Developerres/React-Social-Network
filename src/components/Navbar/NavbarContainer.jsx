import React from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { setUserAuth } from "../../redux/authReducer";
import { connect } from "react-redux";

class NavbarContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setUserAuth(id, email, login);
        }
      });
  }

  render() {
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUserAuth })(NavbarContainer);
