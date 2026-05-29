import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  iterations: 10,
};

export const BASE_URL = 'http://localhost:3001';

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
