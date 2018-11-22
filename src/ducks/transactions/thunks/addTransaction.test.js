import addTransaction from './addTransaction';
import { addTransactionRequest, addTransactionSuccess, addTransactionError } from '../';
import generateGuid from '../../../utils/generateGuid';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';

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

// Helper functions
test('handles saving transaction to the API and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_SUCCESS actions', () => {
  expect.assertions(4);

  const requestMock = mockTransactionsPostRequest(200);

  return runThunk(addTransaction, TRANSACTION_PAYLOAD).then(dispatch => {
    expect(dispatch).toBeCalledWith(addTransactionRequest(TRANSACTION));
    expect(dispatch).toBeCalledWith(addTransactionSuccess(TRANSACTION));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(requestMock.wasCalled()).toBe(true);
  });
});

test('handles failure and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_ERROR actions', () => {
  expect.assertions(4);

  const requestMock = mockTransactionsPostRequest(400);

  return runThunk(addTransaction, TRANSACTION_PAYLOAD).then(dispatch => {
    expect(dispatch).toBeCalledWith(addTransactionRequest(TRANSACTION));
    expect(dispatch).toBeCalledWith(addTransactionError(TRANSACTION));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(requestMock.wasCalled()).toBe(true);
  });
});
