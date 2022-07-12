import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpecificUser from "../../Components/SpecificUser/specificUser";
import Toast from "../../Components/Toast/toast";
import "./userDetails.css";

const UserDetail = () => {
  let { userID } = useParams();
  const [oneUser, setOneUser] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userID}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            authorization: `token ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setOneUser(data);
      } catch (error) {
        setError("An error happened in fetching specific user - UserDetails");
      }
    };

    fetchUsers();
  }, [userID]);

  return (
    <div className="user-details">
      <div className="title-segment">
        <button
          role="link"
          className="return-button"
          onClick={() => navigate("/users", { replace: true })}
        >
          Return to the Users
        </button>
        <h2 className="user-detail-title">
          This is the details of the user {userID}
        </h2>
      </div>
      {oneUser ? (
        oneUser.message !== "Not Found" ? (
          <SpecificUser userDetails={oneUser} />
        ) : (
          <p>There is no user with this Login</p>
        )
      ) : (
        <p>Data is not ready</p>
      )}
      {error && (
        <div onClick={() => setError(false)}>
          <Toast message={error} />
        </div>
      )}
    </div>
  );
};

export default UserDetail;
