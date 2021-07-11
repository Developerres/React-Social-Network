import React from "react";
import Navbar from "../Navbar/Navbar";
import { setUserAuth, isLogged, logout } from "../../redux/authReducer";
import { connect } from "react-redux";

class NavbarContainer extends React.Component {
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

export default connect(mapStateToProps, { setUserAuth, isLogged, logout })(
  NavbarContainer
);
