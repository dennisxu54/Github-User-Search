import "./specificUser.css";

const SpecificUser = ({ userDetails }) => {
  const {
    login,
    avatar_url,
    html_url,
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
        {bio ? <p>Introduction: {bio}</p> : <p>User does not have a Bio</p>}
        <p>
          Github page: <a href={html_url}>{html_url}</a>
        </p>
        <p>
          Following:{" "}
          <a href={`https://github.com/${login}?tab=following`}>{following}</a>
        </p>
        <p>
          Followers:{" "}
          <a href={`https://github.com/${login}?tab=followers`}>{followers}</a>
        </p>
        <p>
          Public Repositories:{" "}
          <a href={`https://github.com/${login}?tab=repositories`}>
            {public_repos}
          </a>
        </p>
      </div>

      <div>
        {name !== "undefined" ? (
          <p>
            Name: <b>{name}</b>
          </p>
        ) : (
          <p>Name: -----</p>
        )}
        {location ? (
          <p>Country: {location}</p>
        ) : (
          <p>User has not entered their Country</p>
        )}
        <p>
          Created at: {created_at.slice(0, 10) + " " + created_at.slice(11, -1)}
        </p>
        <p>Public Gists: {public_gists}</p>
        {blog ? (
          <p>
            User's blog: <a href={`https://${blog}`}>{blog}</a>
          </p>
        ) : (
          <p>User has no blog website</p>
        )}
      </div>
    </div>
  );
};

export default SpecificUser;
