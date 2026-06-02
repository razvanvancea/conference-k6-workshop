/**
11.1 
*/
import { randomSleep } from '../../utils/random-utils.js';
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { errorHandler } from '../../utils/error-handler.js';
import { getAuthToken } from '../../utils/jwt-auth.js';
// import { BASE_URL } from '../../utils/config.js';
const BASE_URL = 'http://books-crud-api-app:3001';

import { Trend } from 'k6/metrics';

export const options = {
  stages: [
    { duration: '15s', target: 30 },
    { duration: '20s', target: 30 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2500'],
  },
};

const API_GET_BOOK_BY_ID = new Trend('duration_get_book_by_id');
const API_GET_ALL_BOOKS = new Trend('duration_get_all_books');
const API_GET_ALL_BOOKS_RANDOM_FAILURE = new Trend('duration_get_all_books_random_failure');

export default function () {
  group('get all books', () => {
    const res = http.get(`${BASE_URL}/books`);
    const responseData = res.json();

    const checkAllBooksResp = check(res, {
      'get all books status is 200': (r) => r.status === 200,
    });

    API_GET_ALL_BOOKS.add(res.timings.duration);
    errorHandler.logError(!checkAllBooksResp, res);
    randomSleep(1, 2);
  });

  group('get single book by id', () => {
    const res = http.get(`${BASE_URL}/books/1`);

    const checkSingleBookResp = check(res, {
      'get single book by id status is 200': (r) => r.status === 200,
    });

    API_GET_BOOK_BY_ID.add(res.timings.duration);
    errorHandler.logError(!checkSingleBookResp, res);
    randomSleep(1, 2);
  });

  group('get books-random failure', () => {
    const res = http.get(`${BASE_URL}/books/random-failure`);

    const checkRandomFailureBookResp = check(res, {
      'get books random failure status is 200': (r) => r.status === 200,
    });

    API_GET_ALL_BOOKS_RANDOM_FAILURE.add(res.timings.duration);
    errorHandler.logError(!checkRandomFailureBookResp, res);
    randomSleep(1, 2);
  });
}
