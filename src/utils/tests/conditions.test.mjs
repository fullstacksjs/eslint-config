import { describe, expect, it } from 'vitest';

import { predicate, strict } from '../conditions.mjs';

describe('strict', () => {
  it('returns the config when strict is enabled', () => {
    expect(strict({ strict: true }, 'warn')).toBe('warn');
  });

  it('keeps array configs by reference when strict is enabled', () => {
    const config = ['warn', { allowOptionalChaining: true }];

    expect(strict({ strict: true }, config)).toBe(config);
  });

  it('returns off when strict is disabled', () => {
    expect(strict({ strict: false }, 'error')).toBe('off');
  });

  it('returns off when strict is missing', () => {
    expect(strict({}, 'error')).toBe('off');
  });
});

describe('predicate', () => {
  it('returns the config when the condition is truthy', () => {
    const config = { 'no-console': 'warn' };

    expect(predicate(true, config)).toBe(config);
  });

  it('returns undefined when the condition is falsy', () => {
    const config = { 'no-console': 'warn' };

    expect(predicate(false, config)).toBeUndefined();
    expect(predicate(undefined, config)).toBeUndefined();
    expect(predicate(0, config)).toBeUndefined();
  });

  it('can be spread into an object when the condition is falsy', () => {
    expect({ a: 1, ...predicate(false, { b: 2 }) }).toEqual({ a: 1 });
  });
});
