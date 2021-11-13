module.exports = {
  plugins: ['prettier', 'simple-import-sort', 'promise', 'node', 'fp'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    './rules/base',
    './rules/es2015',
    './rules/forbidden',
    './rules/style',
    './rules/variables',
    './rules/fp',
    './rules/promise',
    './rules/node',
    'prettier',
  ],
};
