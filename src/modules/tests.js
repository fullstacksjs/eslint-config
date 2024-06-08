const plugin = require('eslint-plugin-jest-formatting');
const { globs } = require('../utils/globs');
const { predicate } = require('../utils/conditions');
const globals = require('globals');

/**
 * @param {import('../init').Options} options
 * @return { import('eslint').Linter.FlatConfig }
 */
function tests(options = {}) {
  return {
    plugins: { 'jest-formatting': plugin },
    files: [...globs.test, ...globs.e2e],
    languageOptions: {
      globals: globals['shared-node-browser'],
    },
    rules: {
      'jest-formatting/padding-around-after-all-blocks': 'warn',
      'jest-formatting/padding-around-after-each-blocks': 'warn',
      'jest-formatting/padding-around-before-all-blocks': 'warn',
      'jest-formatting/padding-around-before-each-blocks': 'warn',
      'jest-formatting/padding-around-describe-blocks': 'warn',
      'jest-formatting/padding-around-test-blocks': 'warn',

      'max-lines-per-function': 'off',
      'no-sparse-arrays': 'off',

      ...predicate(options.fp, {
        'functional/no-let': 'off',
        'functional/no-loop-statements': 'off',
      }),

      ...predicate(options.react, {
        'react/jsx-no-constructed-context-values': 'off',
      }),

      ...predicate(options.typescript, {
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-namespace ': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      }),
    },
  };
}

module.exports = tests;
