import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <div className={css.container}>
<ul className={css.list}>
  {friends.map(friend => (
    <FriendListItem key={friend.id} {...friend}/>
  ))}
</ul>
</div>
    );
};



export default FriendList;

FriendList.proTypes= {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired})),
};