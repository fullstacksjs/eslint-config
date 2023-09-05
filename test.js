/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  rules: {
    'jest/prefer-hooks-in-order': 'warn',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/max-expects': ['off', { max: 5 }],

    // formatting
    'jest-formatting/padding-around-after-all-blocks': 'warn',
    'jest-formatting/padding-around-after-each-blocks': 'warn',
    'jest-formatting/padding-around-all': 'warn',
    'jest-formatting/padding-around-before-all-blocks': 'warn',
    'jest-formatting/padding-around-before-each-blocks': 'warn',
    'jest-formatting/padding-around-describe-blocks': 'warn',
    'jest-formatting/padding-around-expect-groups': 'warn',
    'jest-formatting/padding-around-test-blocks': 'warn',

    'max-lines-per-function': 'off',
    'fp/no-let': 'off',
    'fp/no-loops': 'off',
    'no-sparse-arrays': 'off',

    ...(global.fullstacksjs?.react && {
      'react/jsx-no-constructed-context-values': 'off',
    }),
    ...(global.fullstacksjs?.typescript && {
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/no-namespace ': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    }),
  },
};
