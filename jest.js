module.exports = {
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    'jest/globals': true,
  },
  extends: ['./rules/jest'],
};
