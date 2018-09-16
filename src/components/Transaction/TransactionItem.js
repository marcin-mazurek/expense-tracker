import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transactionType } from '../../types';

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
      <tr>
        <td>{this.props.transaction.description}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.value.toFixed(2)}</td>
        <td>
          <button onClick={this.handleRemove}>🗑</button>
        </td>
      </tr>
    );
  }
}
