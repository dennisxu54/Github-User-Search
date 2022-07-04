import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
      <nav className="nav-bar">
          <span>Logo</span> 

          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/users">Users</NavLink>
          </div>

      </nav>
  );
}
