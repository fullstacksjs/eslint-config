/** @type { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    'import/extensions': ['error', { mjs: 'ignorePackages' }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': ['error', { ignore: ['.js$'], caseSensitiveStrict: true }],
      },
    },
  ],
};
