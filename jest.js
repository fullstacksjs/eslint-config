module.exports = {
  plugins: ['jest', 'jest-formatting'],
  env: {
    'jest/globals': true,
  },
  extends: ['./rules/jest'],
};
