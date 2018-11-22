import loadTransactions from './loadTransactions';
import { loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsError } from '../';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';

// Test data
const TRANSACTIONS = [
  {
    id: '1424bc41-d007-fe8b-20af-a9e91b4bedc0',
    description: 'Zakupy w Biedronce',
    category: 'Grocery',
    value: 31.89,
  },
  {
    id: '0132779a-f493-80a4-bbed-f66b0afa62d0',
    description: '',
    category: 'Other',
    value: 1,
  },
];

// Helper functions
test('handles saving transaction to the API and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_SUCCESS actions', () => {
  expect.assertions(3);

  mockHttpRequest({
    url: '/transactions',
    responseBody: TRANSACTIONS,
  });

  return runThunk(loadTransactions).then(dispatch => {
    expect(dispatch).toBeCalledWith(loadTransactionsRequest());
    expect(dispatch).toBeCalledWith(loadTransactionsSuccess(TRANSACTIONS));
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});

test('handles failure and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_ERROR actions', () => {
  expect.assertions(3);

  mockHttpRequest({
    url: '/transactions',
    responseCode: 500,
  });

  return runThunk(loadTransactions).then(dispatch => {
    expect(dispatch).toBeCalledWith(loadTransactionsRequest());
    expect(dispatch).toBeCalledWith(loadTransactionsError());
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
