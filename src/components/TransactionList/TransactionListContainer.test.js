import mockHttpRequest from '../../../test-utils/mockHttpRequest';
import TRANSACTIONS from '../../../test-data/transactions';
import TransactionListContainerPOM from '../../../test-poms/TransactionListContainerPOM';
import waitUntil from 'wait-until-promise';

test('loads transactions from API', async () => {
  mockHttpRequest({
    url: '/transactions',
    responseBody: TRANSACTIONS,
  });

  const component = new TransactionListContainerPOM();

  await waitUntil(() => component.areTransactionsLoaded());

  expect(component.getTransactions()).toHaveLength(2);

  expect(component.getTransaction(0).getValue()).toEqual(TRANSACTIONS[0].value.toFixed(2));
  expect(component.getTransaction(0).getCategory()).toEqual(TRANSACTIONS[0].category);
  expect(component.getTransaction(0).getDescription()).toEqual(TRANSACTIONS[0].description);

  expect(component.getTransaction(1).getValue()).toEqual(TRANSACTIONS[1].value.toFixed(2));
  expect(component.getTransaction(1).getCategory()).toEqual(TRANSACTIONS[1].category);
  expect(component.getTransaction(1).getDescription()).toEqual(TRANSACTIONS[1].description);
});

test('removes transaction on click', async () => {
  mockHttpRequest({
    url: '/transactions',
    responseBody: TRANSACTIONS,
  });

  mockHttpRequest({
    url: `/transactions/${TRANSACTIONS[0].id}`,
    method: 'DELETE',
    responseBody: TRANSACTIONS,
  });

  const component = new TransactionListContainerPOM();

  await waitUntil(() => component.areTransactionsLoaded());

  expect(component.getTransactions()).toHaveLength(2);
  component.getTransaction(0).clickRemoveButton();

  await waitUntil(() => component.getTransactions().length === 1);

  expect(component.getTransactions()).toHaveLength(1);
  expect(component.getTransaction(0).getDescription()).toEqual(TRANSACTIONS[1].description);
});
