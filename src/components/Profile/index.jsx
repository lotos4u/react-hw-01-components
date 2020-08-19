import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'


console.log(styles);
const Profile = (props) => (
    <div className="profile">
        <div className="description">
            <img
                src={props.avatar}
                alt="user avatar"
                className="avatar"
            />
            <p className="name">{props.name}</p>
            <p className="tag">@{props.tag}</p>
            <p className="location">{props.location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{props.stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{props.stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{props.stats.likes}</span>
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
