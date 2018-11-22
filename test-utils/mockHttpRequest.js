import nock from 'nock';
import { API_ENDPOINT } from '../src/config';

export default function mockHttpRequest({ url, method, requestBody, responseCode, responseBody }) {
  const scope = nock(API_ENDPOINT)
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .intercept(url, method || 'GET', requestBody)
    .reply(responseCode, responseBody);

  return {
    wasCalled: () => scope.isDone(),
  };
}
