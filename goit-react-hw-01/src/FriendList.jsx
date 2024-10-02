import PropTypes from 'prop-types';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <h3>Exercitiu 3:</h3>
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id} className="friend-item">
            <span className="status">{friend.isOnline ? '🟢' : '🔴'}</span>
            <img
              className="friend-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="friend-name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
