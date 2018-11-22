import React, { Component } from 'react';

import TransactionListContainer from '../TransactionList/TransactionListContainer';
import provideStore from '../../model/provideStore';

import './App.css';

class App extends Component {
  render() {
    return provideStore(<TransactionListContainer />);
  }
}

export default App;
