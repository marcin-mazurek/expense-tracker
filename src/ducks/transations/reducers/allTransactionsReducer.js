import { ADD_TRANSACTION, REMOVE_TRANSACTION, CHANGE_TRANSACTION } from '../constants';

export default function transactionsReducer(transactions = [], action = {}) {
  const payload = action.payload;

  switch (action.type) {
    case ADD_TRANSACTION:
      return [...transactions, payload];

    case REMOVE_TRANSACTION:
      return transactions.reduce((accumulator, transaction) => {
        if (transaction.id === payload) {
          return accumulator;
        }

        return [...accumulator, transaction];
      }, []);

    case CHANGE_TRANSACTION:
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
