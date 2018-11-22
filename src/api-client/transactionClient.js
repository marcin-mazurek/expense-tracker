import makeApiCall from './makeApiCall';

export function addTransaction(transaction) {
  return makeApiCall({
    endpoint: `transactions`,
    body: transaction,
    method: 'POST',
  });
}

export function loadTransactions() {
  throw new Error('not implemented');
}

export function removeTransaction(id) {
  throw new Error('not implemented');
}

export function changeTransaction(id, data) {
  throw new Error('not implemented');
}