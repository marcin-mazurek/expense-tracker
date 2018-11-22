import loadTransactions from './loadTransactions';
import { loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsError } from '../';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';

import TRANSACTIONS from '../../../../test-data/transactions';

test('handles loading transaction from the API and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_SUCCESS actions', async () => {
  mockHttpRequest({
    url: '/transactions',
    responseBody: TRANSACTIONS,
  });

  const dispatchMock = await runThunk(loadTransactions);

  expect(dispatchMock).toBeCalledWith(loadTransactionsRequest());
  expect(dispatchMock).toBeCalledWith(loadTransactionsSuccess(TRANSACTIONS));
  expect(dispatchMock).toHaveBeenCalledTimes(2);
});

test('handles failure and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_ERROR actions', async () => {
  mockHttpRequest({
    url: '/transactions',
    responseCode: 500,
  });

  const dispatchMock = await runThunk(loadTransactions);

  expect(dispatchMock).toBeCalledWith(loadTransactionsRequest());
  expect(dispatchMock).toBeCalledWith(loadTransactionsError());
  expect(dispatchMock).toHaveBeenCalledTimes(2);
});
