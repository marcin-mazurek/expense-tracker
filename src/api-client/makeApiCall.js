import { API_ENDPOINT } from '../config';

export default function({ endpoint, body, headers, ...rest }) {
  return fetch(`${API_ENDPOINT}/${endpoint}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
}
