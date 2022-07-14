import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpecificUser from "../../Components/SpecificUser/specificUser";
import Toast from "../../Components/Toast/toast";
import { useFetchUsers } from "../../Hooks/useFetchUser";
import "./userDetails.css";

const UserDetail = () => {
  let { userID } = useParams();
  const { userData, errorMessage } = useFetchUsers(userID);
  const navigate = useNavigate();
  const [error, setError] = useState(errorMessage);

  return (
    <div className="user-details">
      <div className="title-segment">
        <button
          role="link"
          className="return-button"
          onClick={() => navigate(-1)}
        >
          Return to the Users
        </button>
        <h2 className="user-detail-title">
          This is the details of the user {userID}
        </h2>
      </div>
      {userData ? (
        userData.message !== "Not Found" ? (
          <SpecificUser userDetails={userData} />
        ) : (
          <p>There is no user with this Login</p>
        )
      ) : (
        <p>Data is not ready</p>
      )}
      {errorMessage && (
        <div onClick={() => setError(false)}>
          <Toast message={error} />
        </div>
      )}
    </div>
  );
};

export default UserDetail;
