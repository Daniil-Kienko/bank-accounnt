import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Balance.css';

const Balance = (props) => {
  const { deposite, withdraw } = props;
  return (
    <section className="balance">
      <span>⬆️{deposite}$</span>
      <span>⬇️{withdraw}$</span>
      <span>Balance: {deposite - withdraw}$</span>
    </section>
  );
};

Balance.propTypes = {
  deposite: PropTypes.number,
  withdraw: PropTypes.number,
};

export default Balance;
