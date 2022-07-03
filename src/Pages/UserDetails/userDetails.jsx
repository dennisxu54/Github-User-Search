import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificUser from "../../Components/SpecificUser/specificUser";
import "./userDetails.css"

const UserDetail = () => {
  let { userID } = useParams();
  const [oneUser, setOneUser] = useState();

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userID}`);
        const data = await res.json();
        setOneUser(data);
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchUsers();
  }, [userID])

    return (
      <div>
        <div className="user-details">

        <h3>This is the details of the user {userID}</h3>
        {oneUser ? 
        <SpecificUser userDetails={oneUser} /> : 
        <p>Data is not ready</p>}
        </div>
        
      </div>
    );
  };
  
  export default UserDetail;
  