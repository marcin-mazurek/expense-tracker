import { combineReducers, createStore as createReduxStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { transactionsReducer } from '../ducks/transactions';

export default function createStore() {
  const reducers = combineReducers({
    transactions: transactionsReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

  return createReduxStore(reducers, enhancers);
}
