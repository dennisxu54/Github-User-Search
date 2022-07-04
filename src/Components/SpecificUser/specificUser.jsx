import "./specificUser.css";

const SpecificUser = ({ userDetails }) => {
  const {
    login,
    id,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at
  } = userDetails;

  return (
    <div className="detail-box">
      <img src={avatar_url} alt="avatar image" />
      <div className="user-detail">
        <b>Name: {name}</b>
        <div>This account was created at: {created_at}</div>
        <div>This account currently has {followers} followers</div>
        <div>This account is currently following {} other users</div>
        <div>This account has {public_repos} Public Repositories</div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default SpecificUser;
