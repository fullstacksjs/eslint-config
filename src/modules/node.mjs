import plugin from 'eslint-plugin-n';

import { strict } from '../utils/conditions.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function node(options = {}) {
  return {
    plugins: { n: plugin },
    rules: {
      'n/callback-return': 'off',
      'n/exports-style': ['error', 'module.exports', { allowBatchAssign: false }],
      'n/global-require': 'warn',
      'n/handle-callback-err': 'warn',
      'n/hashbang': 'off', // Cannot ignore other files
      'n/no-callback-literal': 'off',
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-mixed-requires': 'warn',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-env': 'error',
      'n/no-process-exit': 'off',
      'n/no-restricted-import': 'off',
      'n/no-restricted-require': 'off',
      'n/no-sync': strict(options, 'warn'),
      'n/no-top-level-await': 'off',
      'n/no-unpublished-bin': 'warn',
      'n/no-unpublished-import': 'warn',
      'n/no-unpublished-require': 'warn',
      'n/no-unsupported-features/es-builtins': 'off', // Nice but not a general rule
      'n/no-unsupported-features/es-syntax': 'off', // Nice but not a general rule
      'n/no-unsupported-features/node-builtins': 'off', // Nice but not a general rule
      'n/prefer-global/buffer': 'warn',
      'n/prefer-global/console': 'warn',
      'n/prefer-global/process': 'warn',
      'n/prefer-global/text-decoder': 'warn',
      'n/prefer-global/text-encoder': 'warn',
      'n/prefer-global/url-search-params': 'warn',
      'n/prefer-global/url': 'warn',
      'n/prefer-node-protocol': 'warn',
      'n/prefer-promises/dns': 'warn',
      'n/prefer-promises/fs': 'warn',
      'n/process-exit-as-throw': 'error',

      // Disabled
      'n/file-extension-in-import': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
    },
  };
}

export default node;
