import { API_ENDPOINT } from '../config';

export default function({ endpoint, body, headers, parseJson, ...rest }) {
  const promise = fetch(`${API_ENDPOINT}/${endpoint}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then(response => (response.ok ? Promise.resolve(response) : Promise.reject(response)));

  if (!parseJson) {
    return promise;
  }

  return promise.then(response => response.json());
}
