import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../utils/config.js';
import { getAuthToken } from '../utils/auth.js';

export default function () {
  /**
   * approach 1 - using the helper function from utils/auth.js
   */
  // const jwt = getAuthToken('rv@tai.com', 'learnwithrv');

  /**
   * approach 2 - doing the login flow directly in this test file without using the helper function
   */
  const loginRequestBody = JSON.stringify({
    email: 'rv@tai.com',
    password: 'learnwithrv',
  });

  const loginResp = http.post(`${BASE_URL}/auth/login`, loginRequestBody, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(loginResp.json());
  const jwt = loginResp.json().token;

  const res = http.get(`${BASE_URL}/private/books`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(randomIntBetween(1, 2));
}
