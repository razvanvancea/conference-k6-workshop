import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';

import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3001';

export const options = {
  stages: [
    { duration: '15s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2500'],
  },
};

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'get books status is 200': (r) => r.status === 200,
    'get books response body contains 3 items': (r) => r.json().length === 3,
    'get books response body contains "The Great Gatsby"': (r) =>
      r.json().some((book) => book.title === 'The Great Gatsby'),
  });

  sleep(randomIntBetween(1, 2));
}
