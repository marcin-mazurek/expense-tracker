import allTransactionsReducer from './allTransactionsReducer';
import { loadTransactionsSuccess, addTransaction, removeTransaction, changeTransaction } from '../actions';

import generateGuid from '../../../utils/generateGuid';
jest.mock('../../../utils/generateGuid');

const firstTransactionPayload = {
  description: 'Transaction 1',
  category: 'Grocery',
  value: 1.0,
};
const firstTransactionId = '0000-00000-0000';
const firstTransaction = {
  ...firstTransactionPayload,
  id: firstTransactionId,
};

const secondTrasnactionPayload = {
  description: 'Transaction 2',
  category: 'Commuting',
  value: 65.9,
};
const secondTransactionId = '1111-22222-3333';
const secondTransaction = {
  ...secondTrasnactionPayload,
  id: secondTransactionId,
};

const sampleState = [firstTransaction, secondTransaction];

describe('allTransactionsReducer', () => {
  test('begins with an empty array by default', () => {
    expect(allTransactionsReducer()).toEqual([]);
  });

  describe('loadTransactionsSuccess', () => {
    test('handles action', () => {
      expect(allTransactionsReducer([], loadTransactionsSuccess(sampleState))).toEqual(sampleState);
    });

    test('discards the previous state if set', () => {
      expect(allTransactionsReducer([secondTransaction], loadTransactionsSuccess([firstTransaction]))).toEqual([firstTransaction]);
    });
  });

  test('handles addTransaction action', () => {
    generateGuid.mockImplementation(() => firstTransactionId);

    expect(allTransactionsReducer([], addTransaction(firstTransactionPayload))).toEqual([firstTransaction]);

    generateGuid.mockImplementation(() => secondTransactionId);

    expect(allTransactionsReducer([firstTransaction], addTransaction(secondTrasnactionPayload))).toEqual([
      firstTransaction,
      secondTransaction,
    ]);
  });

  test('handles removeTransaction action', () => {
    const stateAfterOperation = allTransactionsReducer(sampleState, removeTransaction(firstTransactionId));

    expect(stateAfterOperation).toEqual([secondTransaction]);
  });

  test('handles changeTransaction action', () => {
    const newTransactionData = {
      description: 'Changed transaction 2',
      category: 'Travels',
      value: 5.5,
    };

    const stateAfterOperation = allTransactionsReducer(
      sampleState,
      changeTransaction(secondTransactionId, newTransactionData),
    );

    expect(stateAfterOperation).toEqual([
      firstTransaction,
      {
        id: secondTransactionId,
        ...newTransactionData,
      },
    ]);
  });

  test('ignores unknown actions', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(allTransactionsReducer(sampleState, action)).toBe(sampleState);
  });
});
