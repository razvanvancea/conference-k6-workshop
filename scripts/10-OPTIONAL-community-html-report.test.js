/**
10.1 Add the community k6 HTML report to the test summary by importing the necessary modules and creating the handleSummary function.
The test execution report should be saved as "result.html".

*/

import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { getAuthToken } from '../utils/jwt-auth.js';
import { BASE_URL } from '../utils/config.js';

// TODO: add the nencessary imports for the HTML report HERE

// TODO: create the handleSummary function to generate the HTML report HERE

export const options = {
  stages: [
    { duration: '15s', target: 20 },
    { duration: '20s', target: 20 },
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
  });

  randomSleep(1, 2);
}
