/**
8.1 Refactor the following code to create a new book using the POST /books endpoint. Include the 'Content-Type': 'application/json' header in the request and send a JSON body with the book details (e.g. title and author).
8.2 Use the 'randomString' library (already imported in this file) to generate a random title for the book. 
8.3 Check that the response status is 201 and that the response body contains the created book with the correct title.
8.4 run "npm run format" to format the code
*/

import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';

export default function () {
  const res = http.get(`${BASE_URL}/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(randomIntBetween(1, 2));
}
