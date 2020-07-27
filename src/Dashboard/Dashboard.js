import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    deposite: 0,
    withdraw: 0,
    history: [],
    inpValue: '',
  };

  componentDidMount() {
    const depositeLc = window.localStorage.getItem('deposite');
    const withdrawLc = window.localStorage.getItem('withdraw');
    const historyLc = JSON.parse(window.localStorage.getItem('history'));
    if (depositeLc) this.setState({ deposite: parseInt(depositeLc) });
    if (withdrawLc) this.setState({ withdraw: parseInt(withdrawLc) });
    if (historyLc) this.setState({ history: historyLc });
  }

  componentDidUpdate() {
    window.localStorage.setItem('history', JSON.stringify(this.state.history));
    window.localStorage.setItem('deposite', this.state.deposite);
    window.localStorage.setItem('withdraw', this.state.withdraw);
  }

  handleDeposite = () => {
    if (this.state.inpValue > 0) {
      const obj = {
        type: 'Deposite',
        value: this.state.inpValue,
        date: new Date().toLocaleString('en-GB'),
        id: uuid(),
      };
      this.setState((prevState) => ({
        deposite: prevState.deposite + this.state.inpValue,
        history: [...prevState.history, obj],
        inpValue: '',
      }));
    } else {
      const notify = () => toast('Введите сумму для проведения операции!');
      notify();
    }
  };

  handleWithdraw = () => {
    if (
      this.state.inpValue <= this.state.deposite - this.state.withdraw &&
      this.state.inpValue > 0
    ) {
      const obj = {
        type: 'Withdrawal',
        value: this.state.inpValue,
        date: new Date().toLocaleString('en-GB'),
        id: uuid(),
      };
      this.setState((prevState) => ({
        withdraw: prevState.withdraw + this.state.inpValue,
        history: [...prevState.history, obj],
        inpValue: '',
      }));
    } else {
      const notify = () =>
        toast('На счету недостаточно средств для проведения операции!');
      notify();
    }
  };

  handleInputChange = (e) => {
    this.setState({
      inpValue: parseInt(e.target.value),
    });
  };

  render() {
    const { deposite, withdraw, history, inpValue } = this.state;
    return (
      <div className="dashboard">
        <ToastContainer />
        <Controls
          value={inpValue}
          handleChange={this.handleInputChange}
          deposite={this.handleDeposite}
          withdraw={this.handleWithdraw}
        />
        <Balance deposite={deposite} withdraw={withdraw} />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}

export default Dashboard;
