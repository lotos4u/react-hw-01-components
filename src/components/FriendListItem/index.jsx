import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FriendListItem = (props) => (
    <li className={styles.item}>
        <span className={props.isOnline ? `${styles.status} ${styles.online}` : styles.status}></span>
        <img className={styles.avatar} src={props.avatar} alt="" width="48"/>
        <p className={styles.name}>{props.name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

FriendListItem.defaultProps = {}

export default FriendListItem;
