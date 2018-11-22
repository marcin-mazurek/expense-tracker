import addTransaction from './addTransaction';
import { addTransactionRequest, addTransactionSuccess, addTransactionError } from '../';
import generateGuid from '../../../utils/generateGuid';
import { runThunk, mockHttpRequest } from '../../../../test-utils';

// Test data
const TRANSACTION_PAYLOAD = {
  category: 'Other',
  value: 10.0,
  description: 'Lorem ipsum',
};
const TRANSACTION_ID = '0000-0000-0000';
const TRANSACTION = {
  ...TRANSACTION_PAYLOAD,
  id: TRANSACTION_ID,
};

// Mocks setup
jest.mock('../../../utils/generateGuid');
generateGuid.mockImplementation(() => TRANSACTION_ID);

// Helper functions
function mockTransactionsPostRequest(responseCode) {
  return mockHttpRequest({
    url: '/transactions',
    method: 'POST',
    requestBody: TRANSACTION,
    responseCode,
  });
}

test('handles saving transaction to the API and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_SUCCESS actions', async () => {
  // Mocks the POST /transactions with TRANSACTIONS object and respond with 200 (OK)
  const requestMock = mockTransactionsPostRequest(200);

  // Calls the transaction thunk, with TRANSACTION_PAYLOAD as argument.
  // Await keyword makes sure that the tunk gets fully executed before we run assertions.
  const dispatchMock = await runThunk(addTransaction, TRANSACTION_PAYLOAD);

  // Asserts that the store receives ADD_TRANSACTION_REQUEST action with TRANSACTION payload
  expect(dispatchMock).toBeCalledWith(addTransactionRequest(TRANSACTION));
  expect(dispatchMock).toBeCalledWith(addTransactionSuccess(TRANSACTION));
  expect(dispatchMock).toHaveBeenCalledTimes(2);
  expect(requestMock.wasCalled()).toBe(true);
});

test('handles failure and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_ERROR actions', async () => {
  // TODO: Mock request to POST /transactions with TRANSACTIONS object and respond with 400 (Bad Request)
  // TODO: call the transaction thunk
  // TODO: Assert that the store was send ADD_TRANSACTION_REQUEST action with TRANSACTION payload
  // TODO: Assert that the store was send ADD_TRANSACTION_ERROR action with TRANSACTION payload
  // TODO: Assert that the store was send only 2 actions
  // TODO: Assert that the request mock was called
});
