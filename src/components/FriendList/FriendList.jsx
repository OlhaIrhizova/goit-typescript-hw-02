import FriendListItem from "./components";
import css from "./FriendList.module.css";

const FriendList = ({friends}) => {
return (
<ul className = {css.list}>
	{friends.map(({avatar, name, isOnline, id}) => (
    <li  className ={css.friendCard}
        key={id}> 
		<FriendListItem
        avatar = {avatar}
        name = {name}
        isOnline = {isOnline}
    />
	</li>
    )
)}
	
</ul>
);
};

export default FriendList;