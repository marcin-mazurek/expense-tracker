import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TransactionTableContainer from '../TransactionTable/TransactionTableContainer';
import createStore from '../../model/createStore';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <TransactionTableContainer />
      </Provider>
    );
  }
}

export default App;
