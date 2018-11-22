import React from 'react';
import TransactionList from './TransactionList';
import TRANSACTIONS from '../../../test-data/transactions';
import { shallow } from 'enzyme';

const COMMON_PROPS = {
  newTransaction: {
    value: '',
    description: '',
    category: 'Other',
  },
  onLoad: () => null,
  onRemove: () => null,
  onNewTransactionSave: () => null,
  onNewTransactionFieldChange: () => null,
};

test('renders markup correctly when transactions are loaded', () => {
  const component = shallow(<TransactionList allTransactions={TRANSACTIONS} {...COMMON_PROPS} />);

  expect(component).toMatchInlineSnapshot(`
<div
  className="transaction-list"
>
  <h2>
    Expense list
  </h2>
  <table
    className="transaction-list__table"
  >
    <thead>
      <tr>
        <th
          className="transaction-list__header-cell"
        >
          Amount
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Category
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Description
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <TransactionItem
        key="1424bc41-d007-fe8b-20af-a9e91b4bedc0"
        onRemove={[Function]}
        transaction={
          Object {
            "category": "Grocery",
            "description": "Zakupy w Biedronce",
            "id": "1424bc41-d007-fe8b-20af-a9e91b4bedc0",
            "value": 31.89,
          }
        }
      />
      <TransactionItem
        key="0132779a-f493-80a4-bbed-f66b0afa62d0"
        onRemove={[Function]}
        transaction={
          Object {
            "category": "Other",
            "description": "Batonik",
            "id": "0132779a-f493-80a4-bbed-f66b0afa62d0",
            "value": 1,
          }
        }
      />
      <NewTransaction
        onFieldChange={[Function]}
        onSave={[Function]}
        transaction={
          Object {
            "category": "Other",
            "description": "",
            "value": "",
          }
        }
      />
    </tbody>
  </table>
</div>
`);
});

test('renders markup correctly when transactions are not loaded', () => {
  const component = shallow(<TransactionList allTransactions={[]} {...COMMON_PROPS} />);

  expect(component).toMatchInlineSnapshot(`
<div
  className="transaction-list"
>
  <h2>
    Expense list
  </h2>
  <table
    className="transaction-list__table"
  >
    <thead>
      <tr>
        <th
          className="transaction-list__header-cell"
        >
          Amount
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Category
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Description
        </th>
        <th
          className="transaction-list__header-cell"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <NewTransaction
        onFieldChange={[Function]}
        onSave={[Function]}
        transaction={
          Object {
            "category": "Other",
            "description": "",
            "value": "",
          }
        }
      />
    </tbody>
  </table>
</div>
`);
});
