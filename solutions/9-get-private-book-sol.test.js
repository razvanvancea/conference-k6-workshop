import { randomSleep } from '../utils/random-utils.js';
import http from 'k6/http';
import { errorHandler } from '../utils/error-handler.js';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';
import { getAuthToken } from '../utils/jwt-auth.js';

export function setup() {
  const jwt = getAuthToken('rv@tai.com', 'learnwithrv');
  return { jwt };
}

export default function (data) {
  /**
   * approach 1 (personal choice ranking: #2) - using the helper function from utils/jwt-auth.js
   */
  // const jwt = getAuthToken('rv@tai.com', 'learnwithrv');

  /**
   * approach 2 (personal choice ranking: #3) - doing the login flow directly in this test file without using the helper function
   */
  // const loginRequestBody = JSON.stringify({
  //   email: 'rv@tai.com',
  //   password: 'learnwithrv',
  // });

  // const loginResp = http.post(`${BASE_URL}/auth/login`, loginRequestBody, {
  //   headers: { 'Content-Type': 'application/json' },
  // });
  // console.log(loginResp.json());
  // const jwt = loginResp.json().token;

  // approach 3 (personal choice ranking: #1): using the token obtained in the setup function and passed via the "data" parameter of the default function

  const jwt = data.jwt;
  const res = http.get(`${BASE_URL}/private/books`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const getPrivateBookCheck = check(res, {
    'get private book status is 200': (r) => r.status === 200,
  });
  errorHandler.logError(!getPrivateBookCheck, res);

  randomSleep(1, 2);
}
