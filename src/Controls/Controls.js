import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Controls.css';

const Controls = (props) => {
  const { deposite, withdraw, value, handleChange } = props;
  return (
    <section className="controls">
      <div className="section-conatiner">
        <input
          type="number"
          name="amount"
          autoComplete="off"
          onChange={handleChange}
          value={value}
        />
        <button type="button" onClick={deposite}>
          Deposit
        </button>
        <button type="button" onClick={withdraw}>
          Withdraw
        </button>
      </div>
    </section>
  );
};

Controls.propTypes = {
  deposite: PropTypes.func,
  withdraw: PropTypes.func,
};

export default Controls;
