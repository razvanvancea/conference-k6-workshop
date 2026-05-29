import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '15s',
};

export default function () {
  const res = http.get(`http://localhost:3001/books`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

// k6 new k6-new-basic.test.js
