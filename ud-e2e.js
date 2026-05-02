// TODO: Create a simple GET request

import http, { head } from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://quickpizza.grafana.com';
const username = 'default';
const psw = '12345678';

export const options = {
  vus: 1,
  duration: '3s',
};

export default function () {
  let userRegistered = false;
  const registerPayload = {
    username: username,
    password: psw,
  };

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const registerResponse = http.post(
    `${BASE_URL}/api/users/token/login`,
    JSON.stringify(registerPayload),
    params
  );

  userRegistered = check(registerResponse, {
    'status is 201': (r) => r.status === 201,
  });

  if (!userRegistered) {
    console.error(
      `User registration failed with status ${registerResponse.status} - ${registerResponse.body}`
    );
  }
  sleep(1);
}
