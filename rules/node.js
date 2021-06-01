module.exports = {
  rules: {
    'node/no-unsupported-features/es-builtins': 'off', // Nice but not a general rule
    'node/no-unsupported-features/es-syntax': 'off', // Nice but not a general rule
    'node/no-unsupported-features/node-builtins': 'off', // Nice but not a general rule
    'node/prefer-global/buffer': 'warn',
    'node/prefer-global/console': 'warn',
    'node/prefer-global/process': 'warn',
    'node/prefer-global/text-decoder': 'warn',
    'node/prefer-global/text-encoder': 'warn',
    'node/prefer-global/url-search-params': 'warn',
    'node/prefer-global/url': 'warn',
    'node/prefer-promises/dns': 'warn',
    'node/prefer-promises/fs': 'warn',
    'node/callback-return': 'off',
    'node/exports-style': ['error', 'module.exports', { allowBatchAssign: false }],
    'node/file-extension-in-import': 'off', // import plugin
    'node/global-require': 'error',
    'node/handle-callback-err': 'warn',
    'node/no-callback-literal': 'off',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-import': 'off', // import plugin
    'node/no-extraneous-require': 'off', // import plugin
    'node/no-missing-import': 'off', // import plugin
    'node/no-missing-require': 'off', // import plugin
    'node/no-mixed-requires': 'warn',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'off',
    'node/no-process-env': 'off',
    'node/no-process-exit': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'off',
    'node/no-unpublished-bin': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/process-exit-as-throw': 'off',
    'node/shebang': 'off',
  },
};
