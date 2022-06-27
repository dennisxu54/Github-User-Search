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
        const res = await fetch(`https://api.github.com/search/users?q=${search}`);
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
        {userData ? 
        userData.items.map((user) => <li key={user.id}>{user.login}</li>) : 
        <p>Data is not ready</p>}
      </>
    );
  };
  
  export default UsersPage;
  