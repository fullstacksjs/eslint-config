/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['fp'],
  rules: {
    'fp/no-arguments': 'error',
    'fp/no-class': 'off',
    'fp/no-delete': 'off',
    'fp/no-events': 'off',
    'fp/no-get-set': 'off',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-proxy': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-throw': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'off',
  },
};
