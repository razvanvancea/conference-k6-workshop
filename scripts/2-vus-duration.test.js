/**
2.1 define the "options" constant to set the VUs to 10 and duration to 15 seconds
2.2 Use the 'k6 new' command to create a new test file 'k6-new-basic.test.js' and analyze the new generated file
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
