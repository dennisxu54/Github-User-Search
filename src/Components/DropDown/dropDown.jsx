import "./dropDown.css";

const DropDown = ({ name, value, handleChange }) => {
  return (
    <div className="drop-down">
      <label>
        {name}:{" "}
        <select
          value={value}
          onChange={handleChange}
          className="drop-down-select"
        >
          <option value="Created_at">Created at</option>
          <option value="Public_repos">Public repos</option>
          <option value="Followers">Followers</option>
        </select>
      </label>
    </div>
  );
};

export default DropDown;
