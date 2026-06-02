import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomSleep } from '../utils/random-utils.js';

const BASE_URL = __ENV.URL || 'http://localhost:3001';

export default function () {
  const res = http.get(`${BASE_URL}/books`);
  console.log(`The BASE_URL is ${BASE_URL}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  randomSleep(1, 2);
}

// from CLI run: k6 run -e URL=http://localhost:3001 4-env-vars.test.js
