module.exports = {
  plugins: ['prettier', 'import', 'simple-import-sort', 'fp'],
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
    './rules/base',
    './rules/es2015',
    './rules/forbidden',
    './rules/import',
    './rules/style',
    './rules/variables',
    './rules/fp',
    'prettier',
  ],
};
