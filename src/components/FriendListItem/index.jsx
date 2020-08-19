import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

console.log(styles);
const FriendListItem = (props) => (
    <li className="item">
        <span className="status">{props.isOnline}</span>
        <img className="avatar" src={props.avatar} alt="" width="48"/>
        <p className="name">{props.name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

FriendListItem.defaultProps = {}

export default FriendListItem;
