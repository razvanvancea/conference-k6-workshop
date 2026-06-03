/**
4.1 add a stages configuration to ramp up to 20 VUs over 15 seconds, hold for 20 seconds, and ramp down to 0 VUs over 10 seconds
4.2 add a threshold to check that the 95th percentile of the response duration is less than 2500ms:  http_req_duration: ['p(95)<2500']
4.3 refactor the sleep function to receive random values between 1 and 2 seconds using 'randomSleep' function (already imported in this file)
4.3.2 apply console.log to print the response body
4.4 add check to verify that the response body contains 3 items
4.5 add check to verify that the response body contains a book with title "The Great Gatsby"
4.6 run "npm run format" to format the code
4.7 run the tests using live web dashboard and analyze the results.html file (e.g. K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=k6_html_results.html k6 run scripts/4-stages-threshold.test.js)
4.8 Use the 'k6 new' command to create a new test file 'k6-new-basic.test.js' and analyze the new generated file
*/

import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomSleep } from '../utils/random-utils.js';

const BASE_URL = 'http://localhost:3001';

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
