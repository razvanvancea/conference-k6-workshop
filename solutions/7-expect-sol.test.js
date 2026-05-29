import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { errorHandler } from '../utils/error-handler.js';
import http from 'k6/http';
import { BASE_URL } from '../utils/config.js';
import { check, sleep } from 'k6';
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get(`${BASE_URL}/books`);
  const responseData = res.json();

  console.log(responseData);

  //   console.log(res);

  expect.soft(res.status, 'status should be 200').toBe(200);
  expect.soft(responseData, 'response data should have length 3').toHaveLength(3);
  expect
    .soft(res.headers['X-Powered-By'], 'X-Powered-By header should contain Express')
    .toContain('Express');
  expect.soft(responseData.some((book) => book.title === 'The Great Gatsby')).toBeTruthy();

  sleep(randomIntBetween(1, 2));
}
