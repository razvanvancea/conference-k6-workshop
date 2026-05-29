/**
3.1 create 'options' constant to run the test for a total of 10 iterations
3.2 create a BASE_URL constant to store the base URL of the API and use it in the http.get() call
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
