import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

class TransactionHistory extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <table className="history">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((e) => (
            <tr key={e.id}>
              <td>{e.type}</td>
              <td>{e.value}$</td>
              <td>{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionHistory;
