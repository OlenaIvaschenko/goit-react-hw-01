import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

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