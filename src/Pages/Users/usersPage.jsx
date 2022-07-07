import * as qs from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "../../Components/DropDown/dropDown";
import ParticlesComponent from "../../Components/Particles/Particles";
import SearchBox from "../../Components/SearchBox/searchBox";
import UserCard from "../../Components/UserCard/userCard";
import "./usersPage.css";

const UsersPage = () => {
  const [userData, setUserData] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const location = useLocation();
  const { s: search } = qs.parse(location.search);
  const [sortValue, setSortValue] = useState("Created_at");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  // This function just returns a promise
  const getData = (user) => {
    return fetch(`https://api.github.com/users/${user.login}`).then(
      (response) => {
        return response.json();
      }
    );
  };

  const sortData = (userArray) => {
    if (sortValue === "Created_at") {
      return [...userArray].sort((a, b) =>
        a.created_at.localeCompare(b.created_at)
      );
    } else if (sortValue === "Public_repos") {
      return [...userArray].sort((a, b) => a.public_repos - b.public_repos);
    } else if (sortValue === "Followers") {
      return [...userArray].sort((a, b) => a.followers - b.followers);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Starting search is undefined.
        const res = await fetch(
          `https://api.github.com/search/users?q=${search}&per_page=8`
        );
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [search]);

  useEffect(() => {
    const getSpecificUsers = async () => {
      try {
        Promise.all(userData.items.map(getData)).then((results) => {
          // When all the promises have been resolved, then this will be executed
          //Here all the promises have been resolved, so you would have an array with the ttTimes
          setFilteredUsers(results);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getSpecificUsers();
  }, [userData]);

  return (
    <div className="users-page">
      <ParticlesComponent id="users-page-particles" />
      <h1>Users Page</h1>
      <SearchBox />
      <DropDown
        name="Sorting by"
        value={sortValue}
        handleChange={handleChange}
      />
      <div className="users">
        {filteredUsers ? (
          sortData(filteredUsers).map((user) => (
            <UserCard key={user.id} userDetails={user} />
          ))
        ) : (
          <p>Data is not ready</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
