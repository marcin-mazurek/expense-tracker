import allTransactionsReducer from './allTransactionsReducer';
import {
  loadTransactionsSuccess,
  addTransactionSuccess,
  removeTransactionSuccess,
  changeTransactionSuccess,
} from '../actions';

jest.mock('../../../utils/generateGuid');

const firstTransaction = {
  id: '0000-00000-0000',
  description: 'Transaction 1',
  category: 'Grocery',
  value: 1.0,
};

const secondTransaction = {
  id: '1111-22222-3333',
  description: 'Transaction 2',
  category: 'Commuting',
  value: 65.9,
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
      expect(allTransactionsReducer([secondTransaction], loadTransactionsSuccess([firstTransaction]))).toEqual([
        firstTransaction,
      ]);
    });
  });

  test('handles addTransactionSuccess action', () => {
    expect(allTransactionsReducer([], addTransactionSuccess(firstTransaction))).toEqual([firstTransaction]);

    expect(allTransactionsReducer([firstTransaction], addTransactionSuccess(secondTransaction))).toEqual([
      firstTransaction,
      secondTransaction,
    ]);
  });

  test('handles removeTransactionSuccess action', () => {
    const stateAfterOperation = allTransactionsReducer(sampleState, removeTransactionSuccess(firstTransaction.id));

    expect(stateAfterOperation).toEqual([secondTransaction]);
  });

  test('handles changeTransactionSuccess action', () => {
    const newTransactionData = {
      description: 'Changed transaction 2',
      category: 'Travels',
      value: 5.5,
    };

    const stateAfterOperation = allTransactionsReducer(
      sampleState,
      changeTransactionSuccess(secondTransaction.id, newTransactionData),
    );

    expect(stateAfterOperation).toEqual([
      firstTransaction,
      {
        ...secondTransaction,
        ...newTransactionData,
      },
    ]);
  });

  test('ignores unknown actions', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(allTransactionsReducer(sampleState, action)).toBe(sampleState);
  });
});
