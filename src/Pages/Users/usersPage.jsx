import * as qs from "query-string";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "../../Components/DropDown/dropDown";
import SearchBox from "../../Components/SearchBox/searchBox";
import Toast from "../../Components/Toast/toast";
import UserCard from "../../Components/UserCard/userCard";
import { useSearchUser } from "../../Hooks/useSearchUser";
import "./usersPage.css";

const UsersPage = () => {
  const location = useLocation();
  const { s: search } = qs.parse(location.search);
  const { filteredUsers, searchErrorMessage } = useSearchUser(search);
  const [sortValue, setSortValue] = useState("Created_at");
  const [error, setError] = useState(searchErrorMessage);

  const handleChange = (event) => {
    setSortValue(event.target.value);
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

  return (
    <div className="users-page">
      <div>
        <h1>Users Page</h1>
        <SearchBox searchQuery={search} setSearchQuery={search} />
        <DropDown
          name="Sorting by"
          value={sortValue}
          handleChange={handleChange}
        />
      </div>
      <div className="users">
        {/* If search is undefined or empty then there will be no users to display */}
        {search ? (
          filteredUsers ? (
            sortData(filteredUsers).map((user) => (
              <UserCard key={user.id} userDetails={user} />
            ))
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )
        ) : (
          <h2 className="start-searching">
            <b>Start searching</b>
          </h2>
        )}
      </div>
      {error && (
        <div onClick={() => setError(false)}>
          <Toast message={error} />
        </div>
      )}
    </div>
  );
};

export default UsersPage;
