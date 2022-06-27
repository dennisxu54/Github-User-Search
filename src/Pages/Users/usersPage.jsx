import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../../Components/SearchBox/searchBox";
import * as qs from "query-string";

const UsersPage = () => {
  const [userData, setUserData] = useState();
  const location = useLocation();
  const { s: search } = qs.parse(location.search);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${search}`);
        const data = await res.json();
        setUserData(data);
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchUsers();
  }, [search])


    return (
      <>
        <h1>Users Page</h1>
        <SearchBox />
        {userData ? <p>{userData.login}</p>: <p>Data is not ready</p>}
      </>
    );
  };
  
  export default UsersPage;
  