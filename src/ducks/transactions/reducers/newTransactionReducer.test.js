import newTransactionReducer from './newTransactionReducer';
import { changeNewTransactionField } from '../actions';

const fields = {
  description: '',
  category: 'Other',
  value: 0.0,
};

describe('changeNewTransactionField', () => {
  test('handles description field change with changeNewTransactionField', () => {
    const action = changeNewTransactionField('description', 'Transaction description');
    expect(newTransactionReducer(fields, action)).toEqual({
      ...fields,
      description: 'Transaction description',
    });
  });

  test('handles category field change with changeNewTransactionField', () => {
    const action = changeNewTransactionField('category', 'Grocery');
    expect(newTransactionReducer(fields, action)).toEqual({
      ...fields,
      category: 'Grocery',
    });
  });

  test('handles value field change with changeNewTransactionField', () => {
    const action = changeNewTransactionField('value', 10.5);
    expect(newTransactionReducer(fields, action)).toEqual({
      ...fields,
      value: 10.5,
    });
  });

  test('ignores arbitrary fields', () => {
    const action = changeNewTransactionField('nonExistentField', 'lorem-ipsum');
    expect(newTransactionReducer(fields, action)).toBe(fields);
  });

  test('ignores unknown actions', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(newTransactionReducer(fields, action)).toBe(fields);
  });
});
