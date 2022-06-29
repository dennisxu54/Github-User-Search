import AboutPage from "./Pages/About/aboutPage";
import HomePage from "./Pages/Home/homePage";
import UserDetail from "./Pages/UserDetails/userDetails";
import UsersPage from "./Pages/Users/usersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";

export default function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userID" element={<UserDetail />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
