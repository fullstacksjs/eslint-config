import { describe, expect, it } from 'vitest';

import { allSrc, globs, ignoreGlobs } from '../globs.mjs';

describe('globs', () => {
  it('exposes glob strings for source extensions', () => {
    for (const key of ['src', 'js', 'jsx', 'ts', 'tsx']) {
      expect(globs[key]).toMatch(/^\*\*\/\*\./);
    }
  });

  it('exposes arrays for test, e2e and storybook globs', () => {
    expect(globs.test).toHaveLength(3);
    expect(Array.isArray(globs.e2e)).toBe(true);
    expect(Array.isArray(globs.storybook)).toBe(true);
  });

  it('builds allSrc from the exported globs', () => {
    expect(allSrc).toContain(globs.src);
    expect(allSrc).toContain(globs.md);
  });

  it('ignores node_modules and dist', () => {
    expect(ignoreGlobs).toContain('**/node_modules');
    expect(ignoreGlobs).toContain('**/dist');
  });

  it('has no duplicate ignore globs', () => {
    expect(new Set(ignoreGlobs).size).toBe(ignoreGlobs.length);
  });
});
