import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <>
        <h1>This is the param {userID}</h1>
      </>
    );
  };
  
  export default UserDetail;
  