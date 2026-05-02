// TODO: Create a simple GET request

import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [{ duration: '5s', target: 3 }],
  thresholds: {
    http_req_duration: ['p(95)< 1500'],
    http_req_failed: ['rate<0.1'],
    'http_req_duration{name:health}': ['p(95)< 200'],
    'http_req_duration{name:books}': ['p(95)< 200'],
    'http_req_duration{name:bookbyid}': ['p(95)< 200'],
  },
};

export default function () {
  const res = http.get(`http://localhost:3000/health`, { tags: { name: 'health' } });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response contains ok text': (r) => r.body.includes('ok'),
    'status is ok': (r) => r.json().status === 'ok',
  });

  const res2 = http.get(`http://localhost:3000/books`, { tags: { name: 'books' } });

  check(res2, {
    'status is 200': (r) => r.status === 200,
  });

  const res3 = http.get(`http://localhost:3000/books/1`, { tags: { name: 'bookbyid' } });

  check(res3, {
    'status is 200': (r) => r.status === 200,
  });
}
