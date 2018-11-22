import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transactionType } from '../../types';

import './TransactionItem.css';

export default class TransactionItem extends Component {
  static propTypes = {
    transaction: transactionType,
    onRemove: PropTypes.func.isRequired,
  };

  handleRemove = () => {
    this.props.onRemove(this.props.transaction.id);
  };

  render() {
    return (
      <tr data-test-element="transaction-item">
        <td className="transaction-item__cell" data-test-element="transaction-item-value">
          {this.props.transaction.value.toFixed(2)}
        </td>
        <td className="transaction-item__cell" data-test-element="transaction-item-category">
          {this.props.transaction.category}
        </td>
        <td className="transaction-item__cell" data-test-element="transaction-item-description">
          {this.props.transaction.description}
        </td>
        <td className="transaction-item__cell">
          <button onClick={this.handleRemove} data-test-element="transaction-item-remove-button">
            🗑
          </button>
        </td>
      </tr>
    );
  }
}
