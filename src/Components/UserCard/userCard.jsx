import { Link } from "react-router-dom";
import "./userCard.css"

const UserCard = ({ userDetails }) => {
  const { login, avatar_url, name, public_repos, followers, created_at, } = userDetails;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar"></img>
        <p><b>The username is {login}</b></p>
        
        <p>The date of creation of this account was {created_at.slice(0, 10) + " " + created_at.slice(11, -1)}</p>
        <p>The number of followers are {followers}</p>
        <p>The number of public repos created are {public_repos}</p>
        <Link to={`/users/${login}`}>
          <button>Click</button>
        </Link>
        <br></br>
      </div>
    );
  }
  
  export default UserCard;