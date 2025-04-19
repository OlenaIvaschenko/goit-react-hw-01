import css from "./FriendlistItem.module.css"

const FriendListItem=({friend:{avatar, name, isOnline}})=>{

  // console.log(avatar, name, isOnline);
  


    return(

<div className={css.friendlistitem}>
  <img src={avatar} alt={name} width="48" className={css.avatar} />
  <p className={css.name}>{name}</p>
  

<p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
  {isOnline ? "Online" : "Offline"}
</p>

</div>
)
}
export default FriendListItem