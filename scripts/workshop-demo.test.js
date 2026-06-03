// This file is used ONLY by the trainer during live demos.
// Participants will work mainly in the numbered exercise files.

import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomSleep } from '../utils/random-utils.js';
import { errorHandler } from '../utils/error-handler.js';
import { debugResponse } from '../utils/utils.js';
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';
import { randomString } from '../utils/random-utils.js';

const BASE_URL = "http://localhost:3001";

export default function () {}
