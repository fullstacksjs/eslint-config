import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

describe('title', () => {
  beforeAll(() => {
    console.log('Before');
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should', () => {
    console.log('Spec example');
  });
  it('should 2', () => {
    console.log('Spec example 2');
    expect(true).toBe(true);
    expect(true).toBe(true);
  });

  it('should 3', () => {
    expect(vi.fn()).toBeCalledOnce();
  });
});
