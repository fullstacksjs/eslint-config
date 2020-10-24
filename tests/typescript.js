module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    '../base',
    'plugin:@typescript-eslint/eslint-recommended',
    '../rules/typescript',
    '../rules/typescript-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
};
