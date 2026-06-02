/**
8.1 Refactor the following code to create a new book using the POST /books endpoint. Include the 'Content-Type': 'application/json' header in the request and send a JSON body with the book details (e.g. 'title' and 'author').
8.2 Use the 'randomString' function (already imported in this file) to generate a random title for the book. 
8.3 Check that the response status is 201 and that the response body contains the created book with the correct title.
8.4 run "npm run format" to format the code
*/

import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  randomSleep(1, 2);
}
