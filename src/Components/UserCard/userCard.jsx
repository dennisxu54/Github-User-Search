import { Link } from "react-router-dom";

const UserCard = ({ userDetails }) => {
  const { login, created_at, followers, public_repos } = userDetails;

    return (
      <div>
        <p><b>The name is {login}</b></p>
        <p>The date is {created_at}</p>
        <p>The followers is {followers}</p>
        <p>The public_repos is {public_repos}</p>
        <Link to={`/users/${login}`}>
          <button>Click</button>
        </Link>
        <br></br>
      </div>
    );
  }
  
  export default UserCard;