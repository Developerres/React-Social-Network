import { NavLink } from "react-router-dom";
import cn from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={cn.nav}>
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
