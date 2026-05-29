/**
5.1 refactor BASE_URL constant to read the value from an environment variable with a fallback to 'http://localhost:3001'
Note: run the test from CLI passing the URL environment variable (e.g. k6 run -e URL=http://localhost:3001 4-env-vars.test.js)
*/

import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3001';

export default function () {
  const res = http.get(`${BASE_URL}/books`);
  console.log(`The BASE_URL is ${BASE_URL}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
