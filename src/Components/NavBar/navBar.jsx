import { NavLink, useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <span className="logo" onClick={() => navigate("/", { replace: true })}>
        Logo
      </span>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
}
