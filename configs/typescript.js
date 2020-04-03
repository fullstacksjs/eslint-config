module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['./rules/typescript'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
      },
    },
  },
};
