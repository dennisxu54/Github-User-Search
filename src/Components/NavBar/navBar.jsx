import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <div>
 
      <nav className="nav-bar">
        <div className="logo">
          <span>Logo</span> 
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
