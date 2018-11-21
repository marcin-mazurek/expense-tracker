import allTransactionsReducer from './allTransactionsReducer';
import { addTransaction, removeTransaction, changeTransaction } from '../actions';

import generateGuid from '../../../utils/generateGuid';
jest.mock('../../../utils/generateGuid');

const transaction1Payload = {
  description: 'Transaction 1',
  category: 'Grocery',
  value: 1.0,
};
const transaction1Id = '0000-00000-0000';
const transaction1 = {
  ...transaction1Payload,
  id: transaction1Id,
};

const transaction2Payload = {
  description: 'Transaction 2',
  category: 'Commuting',
  value: 65.9,
};
const transaction2Id = '1111-22222-3333';
const transaction2 = {
  ...transaction2Payload,
  id: transaction2Id,
};

const sampleState = [transaction1, transaction2];

describe('allTransactionsReducer', () => {
  test('begins with an empty array by default', () => {
    expect(allTransactionsReducer()).toEqual([]);
  });

  test('handles addTransaction action', () => {
    generateGuid.mockImplementation(() => transaction1Id);

    expect(allTransactionsReducer([], addTransaction(transaction1Payload))).toEqual([transaction1]);

    generateGuid.mockImplementation(() => transaction2Id);

    expect(allTransactionsReducer([transaction1], addTransaction(transaction2Payload))).toEqual([
      transaction1,
      transaction2,
    ]);
  });

  test('handles removeTransaction action', () => {
    const stateAfterOperation = allTransactionsReducer(sampleState, removeTransaction(transaction1Id));

    expect(stateAfterOperation).toEqual([transaction2]);
  });

  test('handles changeTransaction action', () => {
    const newTransactionData = {
      description: 'Changed transaction 2',
      category: 'Travels',
      value: 5.5,
    };

    const stateAfterOperation = allTransactionsReducer(
      sampleState,
      changeTransaction(transaction2Id, newTransactionData),
    );

    expect(stateAfterOperation).toEqual([
      transaction1,
      {
        id: transaction2Id,
        ...newTransactionData,
      },
    ]);
  });

  test('ignores unknown actions', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(allTransactionsReducer(sampleState, action)).toBe(sampleState);
  });
});
