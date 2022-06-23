const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='search users'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;