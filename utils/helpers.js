import { sleep } from 'k6';
import { randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export function randomSleep(min = 1, max = 3) {
  sleep(randomIntBetween(min, max));
}

export function uniqueBookTitle() {
  return `Book-${randomString(10)}`;
}

export function debugResponse(res, label = 'Response') {
  console.log(`${label} status: ${res.status}`);
  console.log(`${label} body: ${res.body}`);
}
