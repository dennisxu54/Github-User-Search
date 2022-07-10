import { useNavigate } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="home-page-title">Home Page of the Github User search</h1>
      <div>
        <button
          onClick={() => navigate("/users", { replace: true })}
          className="user-page-navigate-button"
        >
          Start Searching!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
