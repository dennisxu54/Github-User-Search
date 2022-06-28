const SearchBox = () => {

  return (
    <form action="/users" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search users"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;