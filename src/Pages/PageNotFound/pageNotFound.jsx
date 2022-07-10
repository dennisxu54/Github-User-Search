import { useNavigate } from "react-router-dom";
import "./pageNotFound.css"

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h1>This page does not exist</h1>
      <button onClick={() => navigate("/", { replace: true })}>
        Return to home page
      </button>
    </div>
  );
};

export default PageNotFound;
