import mockHttpRequest from '../../../test-utils/mockHttpRequest';
import TRANSACTIONS from '../../../test-data/transactions';
import TransactionListContainerPOM from '../../../test-poms/TransactionListContainerPOM';
import waitUntil from 'wait-until-promise';

// TODO: xtest -> test to enable the test
xtest('loads transactions from API', async () => {
  // TODO: Prepare network request mock - mock GET request to /transactions and respond with TRANSACTIONS object

  const component = new TransactionListContainerPOM();
  await waitUntil(() => component.areTransactionsLoaded());

  // TODO: Assert that there are two transactions

  // Assert that value of 1st transaction matches TRANSACTIONS[0].value
  expect(component.getTransaction(0).getValue()).toEqual(TRANSACTIONS[0].value.toFixed(2));

  // TODO: Assert that category of 1st transaction matches TRANSACTIONS[0].category

  // TODO: Assert that description of 1st transaction matches TRANSACTIONS[0].description

  // TODO: Assert that value of 1st transaction matches TRANSACTIONS[1].value

  // TODO: Assert that category of 2nd transaction matches TRANSACTIONS[1].category

  // TODO: Assert that description of 2nd transaction matches TRANSACTIONS[1].description
});

// TODO: xtest -> test to enable the test
xtest('removes transaction on click', async () => {
  // TODO: Prepare network request mocks:
  //
  // * mock GET request to /transactions and respond with TRANSACTIONS object
  // * mock DELETE request to /transactions/[transaction ID]

  const component = new TransactionListContainerPOM();
  await waitUntil(() => component.areTransactionsLoaded());

  // TODO: Assert that there are two transactions

  // TODO: Get the first transaction and click the remove button

  // TODO: Wait until there's one transaction in UI (asynchronous network request)

  // TODO: Assert that there are is one transaction

  // Assert that that the DELETE /transactions/1424bc41-d007-fe8b-20af-a9e91b4bedc0 request was really made
  expect(deleteRequestMock.wasCalled()).toBe(true);
});

test('handles adding a transaction', () => {
  // Now without hints :)
  // You'll need to extend the POM too!
});
