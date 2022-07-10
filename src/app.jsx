import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import HomePage from "./Pages/Home/homePage";
import PageNotFound from "./Pages/PageNotFound/pageNotFound";
import UserDetail from "./Pages/UserDetails/userDetails";
import UsersPage from "./Pages/Users/usersPage";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userID" element={<UserDetail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
