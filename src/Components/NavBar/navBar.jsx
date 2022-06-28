import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutPage from "../../Pages/About/aboutPage";
import HomePage from "../../Pages/Home/homePage";
import UserDetail from "../../Pages/UserDetails/userDetails";
import UsersPage from "../../Pages/Users/usersPage";

export default function NavBar() {
  return (
    <div>
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
