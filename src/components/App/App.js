import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TransactionListContainer from '../TransactionList/TransactionListContainer';
import createStore from '../../model/createStore';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <TransactionListContainer />
      </Provider>
    );
  }
}

export default App;
