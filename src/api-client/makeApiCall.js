import { API_ENDPOINT } from '../config';

export default function({ endpoint, body, headers, parseJson, ...rest }) {
  const promise = fetch(`${API_ENDPOINT}/${endpoint}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!parseJson) {
    return promise;
  }

  return promise.then(response => response.json());
}
