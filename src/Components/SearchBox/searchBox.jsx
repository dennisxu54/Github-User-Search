import "./searchBox.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = () => {
  let navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");


  const onSubmit = (e) => {
    navigate(`/users?s=${searchQuery}`, { replace: true });
    e.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={(e) => onSubmit}>
      <input
      className="search-box"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search users"
        name="s"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
