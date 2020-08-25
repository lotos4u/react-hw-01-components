import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

class Statistics extends Component {
    static propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }))
    }

    static defaultProps = {}

    state = {};

    getColoredStyle() {
        const bgColor = this.getRandomRgb();
        const color = this.getInverseRgb(bgColor);
        return {
            'color': `rgb(${color.r}, ${color.g}, ${color.b})`,
            'backgroundColor': `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
        };
    }

    getRandomRgb() {
        return {
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255),
        };
    }

    getInverseRgb(c) {
        return {
            r: 255 - c.r,
            g: 255 - c.g,
            b: 255 - c.b,
        };
    }

    render() {
        return <section className={styles.statistics}>
            {this.props.title &&
            <h2 className={styles.title}>{this.props.title}</h2>
            }
            <ul className={styles.statList}>
                {this.props.stats.map(item =>
                    <li className={styles.item} key={item.id} style={this.getColoredStyle()}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    }
}

export default Statistics;
