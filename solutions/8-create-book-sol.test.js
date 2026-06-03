import { randomSleep } from '../utils/random-utils.js';
import { randomString } from '../utils/random-utils.js';
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

  randomSleep(1, 2);
}
