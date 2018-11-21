import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TransactionItem from '../Transaction/TransactionItem';
import NewTransaction from '../NewTransaction/NewTransaction';
import './TransactionList.css';
import { transactionType, newTransactionType } from '../../types';

export default class TransactionList extends Component {
  static propTypes = {
    allTransactions: PropTypes.arrayOf(transactionType).isRequired,
    newTransaction: newTransactionType,
    onRemove: PropTypes.func.isRequired,
    onNewTransactionSave: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="transaction-list">
        <h2>Expense list</h2>
        <table className="transaction-list__table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allTransactions.map(transaction => (
              <TransactionItem transaction={transaction} key={transaction.id} onRemove={this.props.onRemove} />
            ))}
            <NewTransaction
              transaction={this.props.newTransaction}
              onFieldChange={this.props.onNewTransactionFieldChange}
              onSave={this.props.onNewTransactionSave}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
