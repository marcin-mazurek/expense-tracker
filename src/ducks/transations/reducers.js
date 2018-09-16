import newTransactionReducer from './reducers/newTransactionReducer';
import transactionsReducer from './reducers/allTransactionsReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  new: newTransactionReducer,
  all: transactionsReducer,
});
