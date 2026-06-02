/**
11.1 
*/
import { randomSleep } from '../utils/random-utils.js';
import { generateBook } from '../utils/utils.js';
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { getAuthToken } from '../utils/jwt-auth.js';
import { BASE_URL } from '../utils/config.js';

import { Trend } from 'k6/metrics';

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

const API_GET_BOOK_BY_ID = new Trend('duration_get_book_by_id');
const API_GET_ALL_BOOKS = new Trend('duration_get_all_books');
const API_GET_ALL_BOOKS_RANDOM_FAILURE = new Trend('duration_get_all_books_random_failure');
const API_DELETE_BOOK_BY_ID = new Trend('duration_delete_book_by_id');

export default function () {
  group('get all books', () => {
    const res = http.get(`${BASE_URL}/books`);
    const responseData = res.json();

    check(res, {
      'get all books status is 200': (r) => r.status === 200,
    });

    API_GET_ALL_BOOKS.add(res.timings.duration);
    randomSleep(1, 2);
  });

  group('get single book by id', () => {
    const res = http.get(`${BASE_URL}/books/1`);

    check(res, {
      'get single book by id status is 200': (r) => r.status === 200,
    });

    API_GET_BOOK_BY_ID.add(res.timings.duration);
    randomSleep(1, 2);
  });

  group('get books-random failure', () => {
    const res = http.get(`${BASE_URL}/books/random-failure`);

    check(res, {
      'get books random failure status is 200': (r) => r.status === 200,
    });

    API_GET_ALL_BOOKS_RANDOM_FAILURE.add(res.timings.duration);
    randomSleep(1, 2);
  });

  group('delete book endpoint', () => {
    const bookId = generateBook();

    const res = http.del(`${BASE_URL}/books/${bookId}`);

    const deleteBookCheck = check(res, {
      'delete book status is 200': (r) => r.status === 200,
    });
    API_DELETE_BOOK_BY_ID.add(res.timings.duration);
    randomSleep(1, 2);
  });
}
