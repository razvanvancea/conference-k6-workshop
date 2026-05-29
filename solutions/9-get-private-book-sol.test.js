import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';

export default function () {
  const res = http.get(`${BASE_URL}/private/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(randomIntBetween(1, 2));
}
