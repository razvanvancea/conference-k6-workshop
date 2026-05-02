// This is init code. It runs once per VU before VU code, once before setup, and once before teardown.

export function setup() {
  // This is setup code. It runs once at the beginning of the test, regardless of the number of VUs.
}

export default function () {
  // This is VU code. It runs repeatedly until the test is stopped.
}

export function teardown() {
  // This is teardown code. It runs once at the end of the test, regardless of the number of VUs.
}
