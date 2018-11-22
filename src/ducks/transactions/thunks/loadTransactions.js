import { loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsError } from '../actions';
import { loadTransactions as loadTransactionsFromApi } from '../../../api-client/transactionClient';

export default function loadTransactions() {
  return dispatch => {
    dispatch(loadTransactionsRequest());

    return loadTransactionsFromApi()
      .then(transactions => dispatch(loadTransactionsSuccess(transactions)))
      .catch(() => dispatch(loadTransactionsError()));
  };
}
