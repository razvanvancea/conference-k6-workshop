import { randomSleep } from '../utils/random-utils.js';
import { errorHandler } from '../utils/error-handler.js';
import http from 'k6/http';
import { check, sleep } from 'k6';

import { BASE_URL } from '../utils/config.js';
import { debugResponse } from '../utils/helpers.js';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get(`${BASE_URL}/books`);
  const responseData = res.json();
  //   console.log(res.body);
  //   console.log(responseData);
  //   console.log(res);
  // debugResponse(res);

  const checkResponseAsserts = check(res, {
    'get books status is 200': (r) => r.status === 200,
    'get books response body contains "The Great Gatsby"': (r) =>
      r.json().some((book) => book.title === 'The Great Gatsby'),
  });
  errorHandler.logError(!checkResponseAsserts, res);

  randomSleep(1, 2);
}

// k6 run 4.5-error-handler.test.js --http-debug=full
