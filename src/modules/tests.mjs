import plugin from '@vitest/eslint-plugin';
import { mergeConfigs } from 'eslint-flat-config-utils';
import globals from 'globals';

import { predicate } from '../utils/conditions.mjs';
import { globs } from '../utils/globs.mjs';
import { objectOrEmpty } from '../utils/objectOrEmpty.mjs';

/**
 * @param { import('../types').Options } options
 * @return { import('eslint').Linter.Config }
 */

function tests(options = {}) {
  const overrides = objectOrEmpty(options.test.overrides);

  const testsConfug = {
    name: 'tests',
    files: [...globs.test, ...globs.e2e],
    plugins: { vitest: plugin },
    languageOptions: {
      globals: { ...globals['shared-node-browser'] },
    },
    rules: {
      'max-lines-per-function': 'off',
      'no-sparse-arrays': 'off',
      'no-empty-function': 'off',

      'vitest/padding-around-all': 'warn',

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

  return mergeConfigs(testsConfug, overrides);
}

export default tests;
