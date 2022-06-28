import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../../Components/SearchBox/searchBox";
import * as qs from "query-string";
import DropDown from "../../Components/DropDown/dropDown";

const UsersPage = () => {
  const [userData, setUserData] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const location = useLocation();
  const { s: search } = qs.parse(location.search);
  const [sortValue, setSortValue] = useState('Created_at');

  const handleChange = (event) => {
    setSortValue(event.target.value)
  }

  // This function just returns a promise
  function getData(user) {
    return fetch(`https://api.github.com/users/${user.login}`)
      .then(response=>{
        return response.json()
      })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${search}&per_page=4`);
        const data = await res.json();
        setUserData(data);
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchUsers();
  }, [search])

  useEffect(() => {
    const sortUsers = async () => {
      try {
        Promise.all(userData.items.map(getData))
        .then((results) => {
          // When all the promises have been resolved, then this will be executed
          //Here all the promises have been resolved, so you would have an array with the ttTimes
          setFilteredUsers(results);
        })
      }
      catch(error) {
        console.log(error)
      }
    }

    sortUsers();
  }, [userData])


    return (
      <>
        <h1>Users Page</h1>
        <SearchBox />
        <DropDown name='Sorting by' value={sortValue} handleChange={handleChange} />
        {filteredUsers ? 
        [...filteredUsers].sort((a, b) => a.created_at.localeCompare(b.created_at)).map((user) => <li key={user.id}>{user.login}</li>) : 
        <p>Data is not ready</p>}
        
      </>
    );
  };
  
  export default UsersPage;
  