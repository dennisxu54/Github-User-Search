import { Link } from "react-router-dom";

import "./navBar.css";

export default function NavBar() {
  return (
    <>
 
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
