/**
9.1 Refactor the following code to get status code 200. It requires using a POST /auth/login endpoint to get a token and then use that token in the Authorization header (as a Bearer token) to access the GET /private/books endpoint.
note: POST /auth/login documentation: http://localhost:3001/api-docs/#/default/post_auth_login
note 2: login creds for the POST /auth/login endpoint: rv@tai.com learnwithrv
note2: if you feel stuck, check the "utils/jwt-auth.js" file for helper functions to perform the login and get the token
9.2 OPTIONAL - use the export function setup() to perform the login flow and get the token, then pass it to the default function via the "data" parameter of the default function. This way you avoid doing the login flow in each VU iteration and you can reuse the token for all VUs and iterations. Note: if you choose this approach, be aware of the potential issue of token expiration if your test runs for a long time.
*/

import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { errorHandler } from '../utils/error-handler.js';
import { check, sleep } from 'k6';
import { getAuthToken } from '../utils/jwt-auth.js';
import { BASE_URL } from '../utils/config.js';

export default function () {
  const res = http.get(`${BASE_URL}/private/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  randomSleep(1, 2);
}
