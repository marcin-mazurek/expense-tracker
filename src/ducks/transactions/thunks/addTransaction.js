import { addTransactionRequest, addTransactionSuccess, addTransactionError } from '../actions';
import createTransaction from '../createTransaction';
import { addTransaction as addTransactionToApi } from '../../../api-client/transactionClient';

export default function addTransaction(data) {
  return dispatch => {
    const transaction = createTransaction(data);

    dispatch(addTransactionRequest(transaction));

    return addTransactionToApi(transaction)
      .then(() => dispatch(addTransactionSuccess(transaction)))
      .catch(() => dispatch(addTransactionError(transaction)));
  };
}
