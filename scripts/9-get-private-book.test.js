/**
9.1 Refactor the following code to get status code 200. It requires using a POST /auth/login endpoint to get a token and then use that token in the Authorization header (as a Bearer token) to access the GET /private/books endpoint.
note: POST /auth/login documentation: http://localhost:3001/api-docs/#/default/post_auth_login
note 2: login creds for the POST /auth/login endpoint: rv@tai.com learnwithrv
note2: if you feel stuck, check the "utils/auth.js" file for helper functions to perform the login and get the token
*/

import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { getAuthToken } from '../utils/auth.js';
import { BASE_URL } from '../utils/config.js';

export default function () {
  const res = http.get(`${BASE_URL}/private/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(randomIntBetween(1, 2));
}
