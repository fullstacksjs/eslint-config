import plugin from 'eslint-plugin-cypress';

import { globs } from '../utils/globs.mjs';

/** @return { import('eslint').Linter.Config } */
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
      'cypress/no-chained-get': 'error',
      '@typescript-eslint/no-namespace': 'off',
    },
  };
}

export default cypress;
