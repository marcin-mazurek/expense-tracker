import React from 'react';
import { mount } from 'enzyme';
import TransactionListContainer from '../src/components/TransactionList/TransactionListContainer';
import provideStore from '../src/model/provideStore';

export default class TransactionListContainerPOM {
  constructor() {
    this._wrapper = mount(provideStore(<TransactionListContainer />));
  }

  get wrapper() {
    this._wrapper.update();
    return this._wrapper;
  }

  select(selector) {
    return this.wrapper.find(`[data-test-element="${selector}"]`);
  }

  areTransactionsLoaded() {
    return this.getTransactions().length > 0;
  }

  getTransactions() {
    return this.select('transaction-item');
  }

  getTransaction(index) {
    const element = this.getTransactions().at(index);
    if (!element) {
      throw new Error('No element with index ' + index);
    }

    return new TransactionItemPOM(element);
  }
}

class TransactionItemPOM {
  constructor(element) {
    this._wrapper = element;
  }

  get wrapper() {
    this._wrapper.update();
    return this._wrapper;
  }

  select(selector) {
    return this.wrapper.find(`[data-test-element="${selector}"]`);
  }

  getValue() {
    return this.select('transaction-item-value').text();
  }

  getCategory() {
    return this.select('transaction-item-category').text();
  }

  getDescription() {
    return this.select('transaction-item-description').text();
  }

  clickRemoveButton() {
    return this.select('transaction-item-remove-button').simulate('click');
  }
}
