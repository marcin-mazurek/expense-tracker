import makeApiCall from './makeApiCall';

export function addTransaction(transaction) {
  return makeApiCall({
    endpoint: `transactions`,
    body: transaction,
    method: 'POST',
  });
}

export async function loadTransactions() {
  return makeApiCall({
    endpoint: `transactions`,
  }).then(transactions => transactions.json());
}

export function removeTransaction(id) {
  throw new Error('not implemented');
}

export function changeTransaction(id, data) {
  throw new Error('not implemented');
}
