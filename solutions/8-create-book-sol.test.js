import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';

export default function () {
  let bookRequestBody = {
    title: randomString(10),
    author: 'John Doe',
  };

  console.log(bookRequestBody);
  const res = http.post(`${BASE_URL}/books`, JSON.stringify(bookRequestBody), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'create book status code is 201': (r) => r.status === 201,
    'created book has correct title': (r) => r.json().title === bookRequestBody.title,
  });

  sleep(randomIntBetween(1, 2));
}
