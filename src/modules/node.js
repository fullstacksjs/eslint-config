const plugin = require('eslint-plugin-n');

/** @return { import('eslint').Linter.FlatConfig } */
function node() {
  return {
    plugins: { n: plugin },
    rules: {
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
      'n/prefer-promises/dns': 'warn',
      'n/prefer-promises/fs': 'warn',
      'n/exports-style': ['error', 'module.exports', { allowBatchAssign: false }],
      'n/global-require': 'warn',
      'n/handle-callback-err': 'warn',
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-mixed-requires': 'warn',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/process-exit-as-throw': 'error',
    },
  };
}

module.exports = node;
