import { NavLink } from "react-router-dom";
import cn from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav className={cn.nav}>
      {props.isAuth ? (
        <p>
          Login as: <strong>{props.login}</strong>{" "}
          <small>
            <button onClick={props.logout}>Logout</button>
          </small>
        </p>
      ) : (
        <strong>
          <NavLink to="/login">Login</NavLink>
        </strong>
      )}
      <div>
        <NavLink to="/profile" activeClassName={cn.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={cn.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" activeClassName={cn.active}>
          Users
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={cn.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={cn.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={cn.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
