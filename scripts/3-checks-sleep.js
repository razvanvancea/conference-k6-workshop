import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get(`${__ENV.BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'has books': (r) => r.json().length > 0,
  });

  sleep(Math.random() * 3);
}
