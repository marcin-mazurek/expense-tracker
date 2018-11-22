import loadTransactions from './loadTransactions';
import { loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsError } from '../';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';

import TRANSACTIONS from '../../../../test-data/transactions';

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
