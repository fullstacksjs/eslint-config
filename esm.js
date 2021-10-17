module.exports = {
  rules: {
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': [2, { ignore: ['.js$'], caseSensitiveStrict: true }],
      },
    },
  ],
};
