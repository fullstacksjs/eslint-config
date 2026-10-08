import { describe, expect, it } from 'vitest';

import { objectOrEmpty } from '../objectOrEmpty.mjs';

describe('objectOrEmpty', () => {
  it('returns objects by reference', () => {
    const value = { a: 1 };

    expect(objectOrEmpty(value)).toBe(value);
  });

  it.each([undefined, null, true, false, 0, 'text'])('returns an empty object for %s', value => {
    expect(objectOrEmpty(value)).toEqual({});
  });

  it('returns a new empty object each time', () => {
    expect(objectOrEmpty(undefined)).not.toBe(objectOrEmpty(undefined));
  });
});
