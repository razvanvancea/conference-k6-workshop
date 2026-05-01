import http from 'k6/http';
import { getAuthTokenToken } from './utils/auth.js';
import { BASE_URL } from './utils/config.js';
import { debugResponse, uniqueBookTitle } from './utils/helpers.js';
import { checkStatus } from './utils/checks.js';

// const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

// function login() {
//   const res = http.post(`${BASE_URL}/auth/login`, JSON.stringify({
//     username: 'workshop',
//     password: 'workshop123',
//   }), {
//     headers: { 'Content-Type': 'application/json' },
//   });

//   return res.json().token;
// }

// export default function () {
//   const token = login();

//   http.get(`${BASE_URL}/private/books`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

export default function () {
  let token = getAuthTokenToken('rv@tai.com', 'learnwithrv');

  console.log('token auth test is' + token);

  const resp = http.get(`${BASE_URL}/private/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  checkStatus(resp, 200);
  uniqueBookTitle();
}
