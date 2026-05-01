// TODO:
// - add stages
// - define thresholds

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 5 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    // http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  // http.get(`${__ENV.BASE_URL}/books`);
  http.get(`http://books-crud-api-app:3001/books`);
  // http.get(`https://jsonplaceholder.typicode.com/posts`);
}
