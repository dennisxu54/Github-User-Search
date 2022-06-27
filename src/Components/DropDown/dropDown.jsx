const DropDown = ({ name, value, handleChange }) => {
  return (
    <label>
      {name}
      <select value={value} onChange={handleChange}>
        <option value="Created_at">Created at</option>
        <option value="Public_repos">Public repos</option>
        <option value="Followers">Followers</option>
      </select>
    </label>
  );
};

export default DropDown;
