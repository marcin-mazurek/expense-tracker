import loadTransactions from './loadTransactions';
import { loadTransactionsRequest, loadTransactionsSuccess, loadTransactionsError } from '../';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';
import TRANSACTIONS from '../../../../test-data/transactions';

test('handles loading transaction from the API and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_SUCCESS actions', async () => {
  // TODO: mock GET /transactions request and respond with TRANSACTIONS
  // TODO: run loadTransactions thunk without arguments
  // TODO: Assert that the store was send LOAD_TRANSACTIONS_REQUEST action with TRANSACTION payload
  // TODO: Assert that the store was send LOAD_TRANSACTIONS_SUCCESS action with TRANSACTION payload
  // TODO: Assert that the store was send only 2 actions
});

test('handles failure and indicates it with LOAD_TRANSACTIONS_REQUEST and LOAD_TRANSACTIONS_ERROR actions', async () => {
  // TODO: Figure out what to do!
});
