import "./searchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  let navigate = useNavigate();

  const onSubmit = (e) => {
    navigate(`?s=${searchQuery}`, { replace: true });
    e.preventDefault();
  };

  return (
    <form action="/users" method="get" onSubmit={(e) => onSubmit}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
