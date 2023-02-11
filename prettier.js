/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
};
