import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get(`${__ENV.BASE_URL}/books`);
  // console.log(res.json());
  check(res, {
    'status is 200': (r) => r.status === 200,
    'assert second book title': (r) => r.json()[1].title === 'The Old Man and the Sea',
    'has at least 10 books': (r) => r.json().length > 10,
  });
}
