import css from "./Profile.module.css";

const Profile = ({name,tag,location,image,stats}) => {
    return (
    <div className={css.container}>

  <div >
    <img
    className={css.avatar}
    src={image}
    alt="User avatar" 
    />
    <p className={css.title}>{name}</p>
    <p className={css.username}>@{tag}</p>
    <p className={css.location}>{location}</p>

  </div>

  <ul className={css.stats}>
      <li className={css.list}>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>

      <li className={css.list}> 
        <span>Views</span>
        <span>{stats.views}</span>
      </li>

      <li className={css.list}>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>

    </ul>

    </div>
  );
};
 export default Profile;