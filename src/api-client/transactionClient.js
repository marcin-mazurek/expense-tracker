import makeApiCall from './makeApiCall';

export function addTransaction(transaction) {
  return makeApiCall({
    endpoint: 'transactions',
    body: transaction,
    method: 'POST',
  });
}

export async function loadTransactions() {
  return makeApiCall({
    endpoint: 'transactions',
    parseJson: true,
  });
}

export function removeTransaction(id) {
  return makeApiCall({
    endpoint: `transactions/${id}`,
    method: 'DELETE',
  });
}

export function changeTransaction(id, data) {
  throw new Error('not implemented');
}
