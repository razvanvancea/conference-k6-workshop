/**
7.1 Use expect library (already imported in this file) to soft assert status code 200
7.2 Use expect library (already imported in this file) to soft assert response body contains "The Great Gatsby"
7.3 Use expect library (already imported in this file) to soft assert response length is 3
*/

import { randomSleep } from '../utils/random-utils.js';
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

  randomSleep(1, 2);
}
