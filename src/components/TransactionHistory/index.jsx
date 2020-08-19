import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

console.log(styles);
const TransactionHistory = (props) => (
    <table className="transaction-history">
        <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>

        <tbody>
        {props.items.map(item => <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>)}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}

TransactionHistory.defaultProps = {}

export default TransactionHistory;
