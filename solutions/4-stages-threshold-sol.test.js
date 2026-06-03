import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:3001';

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
  const responseData = res.json();
  //   console.log(res.body);
  //   console.log(responseData);
  //   console.log(res);

  check(res, {
    'get books status is 200': (r) => r.status === 200,
    'get books response body contains 3 items': (r) => r.json().length === 3,
    'get books response body contains "The Great Gatsby"': (r) =>
      r.json().some((book) => book.title === 'The Great Gatsby'),
  });

  randomSleep(1, 2);
}

// k6 new k6-new-basic.test.js

// K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=results.html k6 run scripts/4-stages-threshold.test.js
