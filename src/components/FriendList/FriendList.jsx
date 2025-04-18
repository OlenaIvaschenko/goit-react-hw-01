import css from './FriendList.module.css';
// import friends from '../friends.json'

{/* <div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div> */}

const FriendListItem=({friend:{avatar, name, isOnline}})=>{

  console.log(avatar, name, isOnline);
  


    return(

<div className={css.friendlistitem}>
  <img src={avatar} alt={name} width="48" className={css.avatar} />
  <p className={css.name}>{name}</p>
  {/* <p className={css.status}>{isOnline? "Online" : "Offline"}</p> */}
  {/* <p className={'status' + {isOnline ? css.online : css.offline}}>
  {isOnline ? "Online" : "Offline"}
</p> */}

<p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
  {isOnline ? "Online" : "Offline"}
</p>

</div>
)
}

 const FriendList =({friends})=>{
return (
<ul className={css.friendlist}>
	{friends.map((friend)=>(
    <li key={friend.id}>
		<FriendListItem  friend={friend}/>
	</li>
    )
    )}
</ul>
)
}
export default FriendList;