import http from 'k6/http';
import { BASE_URL } from './config.js';
import { debugResponse } from './utils.js';

export function getAuthToken(email, psw) {
  const payload = JSON.stringify({
    email: email,
    password: psw,
  });

  const res = http.post(`${BASE_URL}/auth/login`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json().token;
}
