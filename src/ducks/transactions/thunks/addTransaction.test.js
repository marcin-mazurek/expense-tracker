import nock from 'nock';

import addTransaction from './addTransaction';
import { addTransactionRequest, addTransactionSuccess, addTransactionError } from '../';
import { API_ENDPOINT } from '../../../config';
import generateGuid from '../../../utils/generateGuid';
import { runThunk } from '../../../../test-utils';
import mockHttpRequest from '../../../../test-utils/mockHttpRequest';

// Test data
const transactionPayload = {
  category: 'Other',
  value: 10.0,
  description: 'Lorem ipsum',
};
const transactionId = '0000-0000-0000';
const transaction = {
  ...transactionPayload,
  id: transactionId,
};

// Mocks setup
jest.mock('../../../utils/generateGuid');
generateGuid.mockImplementation(() => transactionId);

// Helper functions
function mockTransactionsPostRequest(responseCode) {
  return mockHttpRequest({
    url: '/transactions',
    method: 'POST',
    requestBody: transaction,
    responseCode,
  });
}

// Helper functions
test('handles saving transaction to the API and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_SUCCESS actions', () => {
  expect.assertions(4);

  const requestMock = mockTransactionsPostRequest(200);

  return runThunk(addTransaction, transactionPayload).then(dispatch => {
    expect(dispatch).toBeCalledWith(addTransactionRequest(transaction));
    expect(dispatch).toBeCalledWith(addTransactionSuccess(transaction));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(requestMock.wasCalled()).toBe(true);
  });
});

test('handles failure and indicates it with ADD_TRANSACTION_REQUEST and ADD_TRANSACTION_ERROR actions', () => {
  expect.assertions(4);

  const requestMock = mockTransactionsPostRequest(400);

  return runThunk(addTransaction, transactionPayload).then(dispatch => {
    expect(dispatch).toBeCalledWith(addTransactionRequest(transaction));
    expect(dispatch).toBeCalledWith(addTransactionError(transaction));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(requestMock.wasCalled()).toBe(true);
  });
});
