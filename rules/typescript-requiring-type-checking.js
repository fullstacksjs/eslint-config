module.exports = {
  rules: {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/dot-notation': [
      'warn',
      { allowPrivateClassPropertyAccess: false, allowProtectedClassPropertyAccess: false, allowIndexSignaturePropertyAccess: true },
    ],
    '@typescript-eslint/no-meaningless-void-operator': ['warn', { checkNever: false }],
    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true, ignoreVoidOperator: true }],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      // variables, CONSTANTS, ReactComponents
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
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
      // disallow I prefix for interfaces
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // force use is/should/has ... for boolean variables
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'enable'],
      },
    ],

    // collisions
    'dot-notation': 'off',
  },
};
