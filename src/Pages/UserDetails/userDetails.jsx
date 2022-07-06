import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpecificUser from "../../Components/SpecificUser/specificUser";
import "./userDetails.css";

const UserDetail = () => {
  let { userID } = useParams();
  const [oneUser, setOneUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userID}`);
        const data = await res.json();
        setOneUser(data);
      } catch (error) {
        console.log(error);
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
          onClick={() => navigate(-1)}
        >
          Return
        </button>
        <h2 className="user-detail-title">This is the details of the user {userID}</h2>
      </div>
      {oneUser ? (
        <SpecificUser userDetails={oneUser} />
      ) : (
        <p>Data is not ready</p>
      )}
    </div>
  );
};

export default UserDetail;
