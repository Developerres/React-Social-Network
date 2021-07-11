import React from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { setUserAuth, isLogged } from "../../redux/authReducer";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.isLogged();
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

export default connect(mapStateToProps, { setUserAuth, isLogged })(
  NavbarContainer
);
