import http from 'k6/http';

export const options = {
  scenarios: {
    readers: {
      executor: 'constant-vus',
      vus: 5,
      duration: '30s',
      exec: 'readBooks',
    },
    writers: {
      executor: 'constant-vus',
      vus: 2,
      duration: '30s',
      exec: 'createBook',
    },
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export function readBooks() {
  http.get(`${BASE_URL}/books`);
}

export function createBook() {
  http.post(
    `${BASE_URL}/books`,
    JSON.stringify({
      title: `Book ${Date.now()}`,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
