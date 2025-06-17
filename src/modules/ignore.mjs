import { includeIgnoreFile } from '@eslint/compat';
import { globalIgnores } from 'eslint/config';
import path from 'node:path';

import { ignoreGlobs } from '../utils/globs.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function ignores(options = {}) {
  const gitignorePath = path.resolve(process.cwd(), options.gitignorePath ?? './.gitignore');
  const gitignore = includeIgnoreFile(gitignorePath);
  return globalIgnores([...gitignore.ignores, ...ignoreGlobs, ...(options.ignores ?? [])], 'ignores');
}

export default ignores;
