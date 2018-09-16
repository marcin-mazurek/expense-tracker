import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { newTransactionType } from '../../types';
import normalizeModel from './normalizeModel';

export default class NewTransaction extends Component {
  static propTypes = {
    transaction: newTransactionType,
    onFieldChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  handleDescriptionChange = evt => {
    this.props.onFieldChange('description', evt.target.value);
  };

  handleCategoryChange = evt => {
    this.props.onFieldChange('category', evt.target.value);
  };

  handleValueChange = evt => {
    this.props.onFieldChange('value', evt.target.value);
  };

  handleSave = () => {
    this.props.onSave(normalizeModel(this.props.transaction));
  };

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={this.props.transaction.description}
            onChange={this.handleDescriptionChange}
            placeholder="Description"
          />
        </td>
        <td>
          <input
            type="text"
            value={this.props.transaction.category}
            onChange={this.handleCategoryChange}
            placeholder="Category"
          />
        </td>
        <td>
          <input
            type="number"
            step="0.01"
            value={this.props.transaction.value}
            onChange={this.handleValueChange}
            placeholder="0.00"
          />
        </td>
        <td>
          <button onClick={this.handleSave}>Save</button>
        </td>
      </tr>
    );
  }
}
