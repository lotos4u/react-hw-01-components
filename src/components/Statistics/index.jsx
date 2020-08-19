import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

console.log(styles);
const Statistics = (props) => (
    <section className="statistics">
        <h2 className="title">{props.title}</h2>

        <ul className="stat-list">
            {props.stats.map(item =>
                <li className="item" key={item.id}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
                </li>
            )}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}

Statistics.defaultProps = {}

export default Statistics;
