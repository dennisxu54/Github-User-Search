import { useEffect, useState } from "react";

export function useSearchUser(search) {
  const [searchData, setSearchData] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const [searchErrorMessage, setSearchErrorMessage] = useState(false);

  // This function just returns a promise
  const getData = (user) => {
    return fetch(`https://api.github.com/users/${user.login}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: `token ${process.env.REACT_APP_API_KEY}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  };

  useEffect(() => {
    const searchUsers = async () => {
      try {
        // Starting search is undefined.
        const res = await fetch(
          `https://api.github.com/search/users?q=${search}&per_page=8`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              authorization: `token ${process.env.REACT_APP_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setSearchData(data);
      } catch (error) {
        setSearchErrorMessage("An error happened in user fetch - UsersPage");
      }
    };

    if (search) {
      searchUsers();
    }
  }, [search]);

  useEffect(() => {
    const getSpecificUsers = async () => {
      try {
        searchData &&
          Promise.all(searchData.items.map(getData)).then((results) => {
            // When all the promises have been resolved, then this will be executed
            //Here all the promises have been resolved, so you would have an array with the ttTimes
            setFilteredUsers(results);
          });
      } catch (error) {
        setSearchErrorMessage(
          "An error happened in specific user fetch - UsersPage"
        );
      }
    };
    getSpecificUsers();
  }, [searchData]);

  return { filteredUsers, searchErrorMessage };
}
