/** @type { import('eslint').Linter.Config } */
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
  },
};
