const plugin = require('eslint-plugin-cypress/flat');
const { globs } = require('../utils/globs');

/** @return { import('eslint').Linter.FlatConfig } */
function cypress() {
  return {
    files: globs.e2e,
    plugins: { cypress: plugin },
    rules: {
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/require-data-selectors': 'off',
      'cypress/unsafe-to-chain-command': 'error',
      '@typescript-eslint/no-namespace': 'off',
    },
  };
}

module.exports = cypress;
