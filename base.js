module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier', '@babel', 'import'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
      },
    },
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    './rules/babel',
    './rules/base',
    './rules/es2015',
    './rules/forbidden',
    './rules/import',
    './rules/node',
    './rules/style',
    './rules/variables',
    'prettier',
    'prettier/babel',
  ],
};
