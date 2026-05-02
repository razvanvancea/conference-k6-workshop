import http from 'k6/http';
import { sleep } from 'k6';
import { expect } from 'https://jslib.k6.io/k6-testing/0.5.0/index.js';
import { browser } from 'k6/browser';

export const options = {
  vus: 1,
  duration: '30s',
};

export default async function () {
  const page = await browser.newPage();
  try {
    await page.goto('https://razvanvancea.ro');
    await page.waitForTimeout(2000);
  } finally {
    await page.close();
  }
}

// export default function() {
//   let res = http.get('https://quickpizza.grafana.com');
//   expect.soft(res.status).toBe(201);
//   sleep(1);
//   console.log(faker.person.firstName())
// }
