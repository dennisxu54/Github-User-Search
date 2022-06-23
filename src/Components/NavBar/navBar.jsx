import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "../../Pages/Home/homePage";

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
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

        <Routes>
          <Route path="/about" />
          <Route path="/users" />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
