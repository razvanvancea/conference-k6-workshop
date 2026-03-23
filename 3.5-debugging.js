import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get(`${__ENV.BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'has at least 10 books': (r) => r.json().length > 10, // probabil fals
  });
}