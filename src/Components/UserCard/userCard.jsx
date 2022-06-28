const UserCard = ({ userDetails }) => {

    // [...filteredUsers].sort((a, b) => a.created_at.localeCompare(b.created_at)).map((user) => <li key={user.id}>{user.login}</li>

    return (
      <div>
        <p><b>The name is {userDetails.login}</b></p>
        <p>The date is {userDetails.created_at}</p>
        <p>The followers is {userDetails.followers}</p>
        <p>The public_repos is {userDetails.public_repos}</p>
        <br></br>
      </div>
    );
  }
  
  export default UserCard;