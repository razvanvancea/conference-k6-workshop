import { check } from 'k6';
import http from 'k6/http';
import { BASE_URL } from './config.js';
import { errorHandler } from './error-handler.js';
import { randomString } from './random-utils.js';

export function checkStatus(res, expectedStatus) {
  const result = check(res, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });

  if (!result) {
    errorHandler.logError(!result, res);
  }

  return result;
}

export function debugResponse(res, label = 'Response') {
  console.log(`${label} status: ${res.status}`);
  console.log(`${label} body: ${res.body}`);
}

export function generateBook() {
  const payload = JSON.stringify({
    title: randomString(10),
    author: randomString(10),
  });

  const res = http.post(`${BASE_URL}/books`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(res.json());

  return res.json().id;
}
