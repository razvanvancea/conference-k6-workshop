/**
10.1 Add the community k6 HTML report to the test summary by importing the necessary modules and creating the handleSummary function.
The test execution report should be saved as "result.html".

*/

import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { getAuthToken } from '../utils/jwt-auth.js';
import { BASE_URL } from '../utils/config.js';

// add the necessary imports for the HTML report HERE
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.1.0/index.js';

// create the handleSummary function to generate the HTML report HERE
export function handleSummary(data) {
  return {
    'result.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}

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
