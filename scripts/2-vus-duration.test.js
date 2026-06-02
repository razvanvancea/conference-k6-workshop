/**
2.1 define and export the "options" constant to set the VUs to 5 and duration to 15 seconds
*/

import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get(`http://localhost:3001/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
