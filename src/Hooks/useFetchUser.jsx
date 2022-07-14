import { useEffect, useState } from "react";

export function useFetchUsers(userID) {
  const [userData, setUserdata] = useState();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${userID}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            authorization: `token ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUserdata(data);
      } catch (error) {
        setErrorMessage(
          "An error happened in fetching specific user - UserDetails"
        );
      }
    };

    fetchUsers();
  }, [userID]);

  return { userData, errorMessage };
}
