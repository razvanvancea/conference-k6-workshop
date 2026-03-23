import { check } from 'k6';
import { errorHandler } from './error-handler.js';

export function checkStatus(res, expectedStatus) {
  const result = check(res, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
  
  if (!result) {
    errorHandler.logError(!result, res);
  }
  
  return result;
}
