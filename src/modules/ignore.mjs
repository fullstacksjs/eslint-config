import { globalIgnores } from 'eslint/config';

import { ignoreGlobs } from '../utils/globs.mjs';
/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function ignores(options = {}) {
  return globalIgnores([...ignoreGlobs, ...options.ignores]);
}

export default ignores;
