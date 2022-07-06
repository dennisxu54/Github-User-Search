import { Link } from "react-router-dom";
import "./userCard.css";

const UserCard = ({ userDetails }) => {
  const { login, avatar_url, public_repos, followers, created_at } =
    userDetails;

  return (
    <Link to={`/users/${login}`} className="user-card">
      <img src={avatar_url} alt="Avatar" className="user-card-img" />
      <p>
        <b>{login}</b>
      </p>
      <p>
        Created at: {created_at.slice(0, 10) + " " + created_at.slice(11, -1)}
      </p>
      <p>Followers: {followers}</p>
      <p>Public repos: {public_repos}</p>
    </Link>
  );
};

export default UserCard;
