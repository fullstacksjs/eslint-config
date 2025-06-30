import { includeIgnoreFile } from '@eslint/compat';
import { globalIgnores } from 'eslint/config';
import fs from 'node:fs';
import path from 'node:path';

import { ignoreGlobs } from '../utils/globs.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function ignores(options = {}) {
  const ignorePatterns = [...ignoreGlobs, ...(options.ignores ?? [])];

  const gitignoreFilePath = path.resolve(process.cwd(), options.gitignorePath);
  const gitignoreFileExists = fs.existsSync(gitignoreFilePath); // eslint-disable-line n/no-sync

  if (gitignoreFileExists) {
    const gitignore = includeIgnoreFile(gitignoreFilePath);
    ignorePatterns.push(...gitignore.ignores);
  }

  return globalIgnores(ignorePatterns, 'ignores');
}

export default ignores;
