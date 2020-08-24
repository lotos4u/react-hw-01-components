import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const Statistics = (props) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{props.title}</h2>

        <ul className={styles.statList}>
            {props.stats.map(item =>
                <li className={styles.item} key={item.id}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>
            )}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}

Statistics.defaultProps = {}

export default Statistics;
