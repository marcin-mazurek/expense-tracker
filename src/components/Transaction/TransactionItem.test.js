import React from 'react';
import TransactionItem from './TransactionItem';
import TRANSACTIONS from '../../../test-data/transactions';
import { shallow } from 'enzyme';

test('renders markup correctly', () => {
  const component = shallow(<TransactionItem transaction={TRANSACTIONS[0]} onRemove={() => null} />);
  expect(component).toMatchInlineSnapshot(`
<tr>
  <td
    className="transaction-item__cell"
  >
    31.89
  </td>
  <td
    className="transaction-item__cell"
  >
    Grocery
  </td>
  <td
    className="transaction-item__cell"
  >
    Zakupy w Biedronce
  </td>
  <td
    className="transaction-item__cell"
  >
    <button
      onClick={[Function]}
    >
      🗑
    </button>
  </td>
</tr>
`);
});
