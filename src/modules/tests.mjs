import globals from 'globals';

import { predicate } from '../utils/conditions.mjs';
import { globs } from '../utils/globs.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */

function tests(options = {}) {
  return {
    files: [...globs.test, ...globs.e2e],
    languageOptions: {
      globals: { ...globals['shared-node-browser'] },
    },
    rules: {
      'max-lines-per-function': 'off',
      'no-sparse-arrays': 'off',
      'no-empty-function': 'off',

      ...predicate(options.react, {
        '@eslint-react/no-unstable-context-value': 'off',
      }),

      ...predicate(options.typescript, {
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-promise-reject-errors': 'off',
      }),
    },
  };
}

export default tests;
