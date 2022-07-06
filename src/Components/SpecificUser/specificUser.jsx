import "./specificUser.css";

const SpecificUser = ({ userDetails }) => {
  const {
    login,
    avatar_url,
    html_url,
    followers_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    name,
    blog,
    location,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
  } = userDetails;

  return (
    <div className="detail-box">
      <img src={avatar_url} alt="avatar" className="user-detail-img" />
      <div>
        <p>
          Login: <b>{login}</b>
        </p>
        <p>
          Github page: <a href={html_url}>{html_url}</a>
        </p>
        <p>Followers URL: {followers_url}</p>
        <p>Following: {subscriptions_url}</p>
        <p>Public Repositories: {organizations_url}</p>
        <p>Public Repositories: {repos_url}</p>
        {blog ? <p>User's blog: {blog}</p> : <p>User has no blog</p>}
      </div>
      <div>
        <p>
          Name: <b>{name}</b>
        </p>
        <p>Created at: {bio}</p>
        <p>Created at: {location}</p>
        <p>Created at: {created_at}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following} users</p>
        <p>Public Gists: {public_gists}</p>
        <p>Public Repositories: {public_repos}</p>
      </div>
    </div>
  );
};

export default SpecificUser;
