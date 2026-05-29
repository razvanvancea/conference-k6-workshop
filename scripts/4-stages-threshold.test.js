/**
4.1 add a stages configuration to ramp up to 30 VUs over 15 seconds, hold for 20 seconds, and ramp down to 0 VUs over 10 seconds
4.2 add a threshold to check that the 95th percentile of the response duration is less than 2500ms
4.3 refactor the sleep function to receive random values between 1 and 2 seconds using 'randomIntBetween' library (already imported in this file)
4.4 add check to verify that the response body contains 3 items
4.5 add check to verify that the response body contains a book with title "The Great Gatsby"
4.6 run "npm run format" to format the code
4.7 run the tests using live web dashboard and analyze the results.html file (e.g. K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=results.html k6 run 3-stages-threshold.test.js)
*/

import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';

const BASE_URL = 'http://localhost:3001';

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
