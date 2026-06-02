/**
6.0 Refactor the code to use the imported BASE_URL constant from the ../utils/config.js file (already imported in this file)
6.1 run the tests in full debug mode
6.2 implement the errorHandler utility function in the utils folder and use it to log the response details when a check fails
6.3 use the debugResponse helper function (already imported in this file) to log the response details
*/

import { randomSleep } from '../utils/random-utils.js';

import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorHandler } from '../utils/error-handler.js';
import { debugResponse } from '../utils/utils.js';
import { BASE_URL } from '../utils/config.js';

const BASE_URL = __ENV.URL || 'http://localhost:3001';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get(`${BASE_URL}/books/random-failure`);

  check(res, {
    'get books status is 200': (r) => r.status === 200,
  });

  randomSleep(1, 2);
}
