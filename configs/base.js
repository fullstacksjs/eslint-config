module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'babel', 'import', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
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
    es6: true,
    browser: true,
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
    'prettier/react',
  ],
};
