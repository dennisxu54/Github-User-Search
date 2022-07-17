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
  console.log("This it he console log", userData)

  return (
    <div className="user-details">
      <div className="title-segment">
        <button
          role="link"
          className="return-button"
          onClick={() => navigate(-1)}
        >
          Return to the last page
        </button>
      </div>
      {userData ? (
        userData.message !== "Not Found" ? (
          <SpecificUser userDetails={userData} />
        ) : (
          <h2 className="user-detail-title">
            There is no such user: {userID}
          </h2>
        )
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
