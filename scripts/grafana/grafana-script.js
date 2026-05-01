// TODO:
// - add stages
// - define thresholds

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 5 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const res = http.get(`http://books-crud-api-app:3001/books/random-failure`);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(Math.random() * 3);
}

// docker-compose run --rm k6 run /scripts/grafana/grafana-script.js
// to delete previous data, run rm -rf ./docker/grafana/influxdb_data
