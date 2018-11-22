import { removeTransactionRequest, removeTransactionSuccess, removeTransactionError } from '../actions';
import { removeTransaction as removeTransactionFromApi } from '../../../api-client/transactionClient';

export default function removeTransaction(id) {
  return dispatch => {
    dispatch(removeTransactionRequest(id));

    removeTransactionFromApi()
      .then(() => dispatch(removeTransactionSuccess(id)))
      .catch(() => dispatch(removeTransactionError(id)));
  };
}
