import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'
import FriendListItem from "../FriendListItem";

console.log(styles);
const FriendList = (props) => (
    <ul className="friend-list">
        {props.friends.map(item => <FriendListItem key={item.id}
                                                   name={item.name}
                                                   avatar={item.avatar}
                                                   isOnline={item.isOnline}/>)}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    }))
}

FriendList.defaultProps = {}

export default FriendList;
