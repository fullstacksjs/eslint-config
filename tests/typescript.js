module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['../rules/typescript', '../rules/typescript-requiring-type-checking', 'prettier'],
};
