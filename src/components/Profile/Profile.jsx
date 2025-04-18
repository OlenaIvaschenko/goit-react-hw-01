// import "./Profile.module.css"


// const userData = {
//     username: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Ocho Rios, Jamaica",
//     avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308
//     } 
//   };

import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img src={image} alt={name} className={css.avatar} />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;
