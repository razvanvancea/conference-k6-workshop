/**
11.1 create groups for the following endpoints:
- GET /books
- GET /books/1
- GET /books/random-failure
- OPTIONAL - POST /books using random title
- OPTIONAL - DELETE /books/:id (create a book and then delete it in the same group; you can create a helper function that creates a book and returns its id to be used in the DELETE endpoint)

11.2 create Trend objects (constants) and use them to measure the response time of each of the above endpoints and add the corresponding .add(res.timings.duration) calls in each group
11.3 add randomSleep between 1 and 2 seconds at the end of each group
11.4 OPTIONAL: add errorHandler.logError() calls in each group to log any failed checks
*/
import { randomSleep } from '../utils/random-utils.js';
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

// create Trend objects for each group endpoint

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

  group('get single book by id', () => {});

  group('get books-random failure endpoint', () => {});
}
