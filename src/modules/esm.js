/** @type { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    ...(global.fullstacksjs?.import && { 'import/extensions': ['error', { mjs: 'ignorePackages' }] }),
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...(global.fullstacksjs?.import && { 'import/no-unresolved': ['error', { ignore: ['.js$'], caseSensitiveStrict: true }] }),
      },
    },
  ],
};
