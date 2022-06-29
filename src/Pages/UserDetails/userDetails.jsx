import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificUser from "../../Components/SpecificUser/specificUser";

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
        <h3>This is the details of the user {userID}</h3>
        <SpecificUser userDetails={oneUser} />
      </div>
    );
  };
  
  export default UserDetail;
  