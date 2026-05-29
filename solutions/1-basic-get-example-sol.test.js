import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get(`http://localhost:3001/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

// 2. k6 run 1-basic-get-example.test.js
// 3. k6 run --vus 5 --duration 10s 1-basic-get-example.test.js
