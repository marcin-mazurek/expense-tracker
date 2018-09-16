import { combineReducers, createStore as createReduxStore } from 'redux';
import transactionsReducer from '../ducks/transations/reducers';

export default function createStore() {
  const reducers = combineReducers({
    transactions: transactionsReducer,
  });
  const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  return createReduxStore(reducers, devtool);
}
