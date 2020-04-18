module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['./rules/jest'],
};
