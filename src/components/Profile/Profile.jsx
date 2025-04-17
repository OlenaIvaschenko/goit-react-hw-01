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

import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={image}
          alt={name}
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
