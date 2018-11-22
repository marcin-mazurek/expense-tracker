import React from 'react';
import TransactionItem from './TransactionItem';
import TRANSACTIONS from '../../../test-data/transactions';
import { shallow } from 'enzyme';

test('renders markup correctly', () => {
  const component = shallow(<TransactionItem transaction={TRANSACTIONS[0]} onRemove={() => null} />);

  // TODO: add an inline snapshot assertion

  // Later play around with the component, change its markup and see how the Jest CLI behaves
});
