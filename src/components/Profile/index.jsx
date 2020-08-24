import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const Profile = (props) => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={props.avatar}
                alt="user avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.tag}>@{props.tag}</p>
            <p className={styles.location}>{props.location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{props.stats.followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{props.stats.views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{props.stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}

Profile.defaultProps = {}

export default Profile;
