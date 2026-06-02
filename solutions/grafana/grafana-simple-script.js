import { randomSleep } from '../../utils/random-utils.js';
// import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorHandler } from '../../utils/error-handler.js';

const BASE_URL = 'http://books-crud-api-app:3001';

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
  const res = http.get(`${BASE_URL}/books/random-failure`);
  const checkResponseAsserts = check(res, {
    'get books status is 200': (r) => r.status === 200,
  });

  errorHandler.logError(!checkResponseAsserts, res);

  //   sleep(randomIntBetween(1, 2));
  randomSleep(1, 2);
}
