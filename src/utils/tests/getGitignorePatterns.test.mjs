import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getGitignorePatterns } from '../getGitignorePatterns.mjs';

describe('getGitignorePatterns', () => {
  let directory;
  let warn;

  beforeEach(async () => {
    directory = await fs.mkdtemp(path.join(os.tmpdir(), 'gitignore-'));
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(async () => {
    await fs.rm(directory, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it('returns patterns from an absolute path', async () => {
    const file = path.join(directory, '.gitignore');

    await fs.writeFile(file, 'dist\ncoverage\n');

    const patterns = getGitignorePatterns(file);

    expect(patterns.length).toBeGreaterThan(0);
    expect(patterns.some(pattern => pattern.includes('dist'))).toBe(true);
    expect(patterns.some(pattern => pattern.includes('coverage'))).toBe(true);
    expect(warn).not.toHaveBeenCalled();
  });

  it('resolves relative paths against the current working directory', async () => {
    await fs.writeFile(path.join(directory, '.gitignore'), 'build\n');
    vi.spyOn(process, 'cwd').mockReturnValue(directory);

    const patterns = getGitignorePatterns('./.gitignore');

    expect(patterns.some(pattern => pattern.includes('build'))).toBe(true);
    expect(warn).not.toHaveBeenCalled();
  });

  it('warns and returns an empty array when the file is missing', () => {
    const file = path.join(directory, 'missing');

    expect(getGitignorePatterns(file)).toEqual([]);
    expect(warn).toHaveBeenCalledExactlyOnceWith(
      expect.any(String),
      expect.stringContaining(file),
      expect.stringContaining('Falling back'),
    );
  });

  it('warns and returns an empty array when the file has no patterns', async () => {
    const file = path.join(directory, '.gitignore');

    await fs.writeFile(file, '# only a comment\n');

    expect(getGitignorePatterns(file)).toEqual([]);
    expect(warn).toHaveBeenCalledExactlyOnceWith(
      expect.any(String),
      expect.stringContaining('No patterns found'),
      expect.stringContaining('Falling back'),
    );
  });
});
