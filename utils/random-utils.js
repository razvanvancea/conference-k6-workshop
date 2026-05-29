export const randomString = (length, charset = '') => {
  const len = Math.floor(length);
  if (!Number.isFinite(len) || len < 0) {
    throw new RangeError(`randomString: length must be a non-negative number, got ${length}`);
  }
  if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (let i = 0; i < len; i++) res += charset[(Math.random() * charset.length) | 0];
  return res;
};

export const randomIntBetween = (min, max) => {
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new RangeError(
      `randomIntBetween: min and max must be finite numbers, got ${min} and ${max}`
    );
  }
  if (min > max) {
    throw new RangeError(`randomIntBetween: min must be <= max, got ${min} > ${max}`);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
