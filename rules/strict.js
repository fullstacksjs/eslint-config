module.exports = {
  rules: {
    'no-console': 'warn',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'fp/no-mutating-methods': 'error',
    'fp/no-mutation': ['error', { commonjs: true, allowThis: true, exceptions: [{ property: 'propTypes' }, { property: 'defaultProps' }] }],
    'fp/no-nil': 'error',
    'fp/no-this': 'error',
    'fp/no-throw': 'error',
    'fp/no-unused-expression': ['error', { allowUseStrict: true }],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // variables, CONSTANTS, ReactComponents
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['static'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      // disallow I prefix for interfaces
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: false },
      },
    ],
  },
};
