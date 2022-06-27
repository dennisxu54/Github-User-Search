import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../../Components/SearchBox/searchBox";
import * as qs from "query-string";
import DropDown from "../../Components/DropDown/dropDown";

const UsersPage = () => {
  const [userData, setUserData] = useState();
  const location = useLocation();
  const { s: search } = qs.parse(location.search);
  const [sortValue, setSortValue] = useState('Created_at');

  function sortingData () {

  }

  const handleChange = (event) => {
    setSortValue(event.target.value)
  }

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
        <DropDown name='Sorting by' value={sortValue} handleChange={handleChange} />
        {userData ? 
        userData.items.map((user) => <li key={user.id}>{user.login}</li>) : 
        <p>Data is not ready</p>}
        
      </>
    );
  };
  
  export default UsersPage;
  