// TODO: Create a simple GET request

import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get(`http://localhost:3000/health`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'status is ok': (r) => r.json().status === 'ok',
  });
}