import React from 'react';
import TransactionItem from './TransactionItem';
import TRANSACTIONS from '../../../test-data/transactions';
import { shallow } from 'enzyme';

test('renders markup correctly', () => {
  const component = shallow(<TransactionItem transaction={TRANSACTIONS[0]} onRemove={() => null} />);
  expect(component).toMatchInlineSnapshot(`
<tr
  data-test-element="transaction-item"
>
  <td
    className="transaction-item__cell"
    data-test-element="transaction-item-value"
  >
    31.89
  </td>
  <td
    className="transaction-item__cell"
    data-test-element="transaction-item-category"
  >
    Grocery
  </td>
  <td
    className="transaction-item__cell"
    data-test-element="transaction-item-description"
  >
    Zakupy w Biedronce
  </td>
  <td
    className="transaction-item__cell"
  >
    <button
      data-test-element="transaction-item-remove-button"
      onClick={[Function]}
    >
      🗑
    </button>
  </td>
</tr>
`);
});
