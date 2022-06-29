import "./specificUser.css"

const SpecificUser = ({ userDetails }) => {
    const { login, avatar_url, created_at, followers, public_repos } = userDetails;

    return (
      <div className="user-detail">
        <img src={avatar_url} alt="avatar image" />
        <div>
        <b>Name: {login}</b>
        <div>This account was created at: {created_at}</div>
        <div>This account currently has {followers} followers</div>
        <div>This account is currently following {} other users</div>
        <div>This account has {public_repos} Public Repositories</div>
        </div>

      </div>
    );
  }
  
  export default SpecificUser;