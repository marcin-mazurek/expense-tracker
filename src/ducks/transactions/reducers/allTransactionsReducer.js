import {
  LOAD_TRANSACTIONS_SUCCESS,
  ADD_TRANSACTION_SUCCESS,
  REMOVE_TRANSACTION_SUCCESS,
  CHANGE_TRANSACTION_SUCCESS,
} from '../constants';

export default function transactionsReducer(transactions = [], action = {}) {
  const payload = action.payload;

  switch (action.type) {
    case LOAD_TRANSACTIONS_SUCCESS:
      return payload;

    case ADD_TRANSACTION_SUCCESS:
      return [...transactions, payload];

    case REMOVE_TRANSACTION_SUCCESS:
      return transactions.reduce((accumulator, transaction) => {
        if (transaction.id === payload) {
          return accumulator;
        }

        return [...accumulator, transaction];
      }, []);

    case CHANGE_TRANSACTION_SUCCESS:
      return transactions.map(transaction => {
        if (transaction.id !== payload.id) {
          return transaction;
        }

        return { ...transaction, ...payload.data };
      });

    default:
      return transactions;
  }
}
