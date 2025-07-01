import { globalIgnores } from 'eslint/config';

import { getGitignorePatterns } from '../utils/getGitignorePatterns.mjs';
import { ignoreGlobs } from '../utils/globs.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function ignores(options = {}) {
  const ignorePatterns = [...ignoreGlobs, ...(options.ignores ?? [])];

  const shouldUseGitignore = options.gitignore && options.gitignore.length > 0;
  if (shouldUseGitignore) {
    const gitignorePatterns = getGitignorePatterns(options.gitignore);
    if (gitignorePatterns.length > 0) {
      ignorePatterns.push(...gitignorePatterns);
    }
  }

  const uniqueIgnorePatterns = [...new Set(ignorePatterns)];

  return globalIgnores(uniqueIgnorePatterns, 'ignores');
}

export default ignores;
