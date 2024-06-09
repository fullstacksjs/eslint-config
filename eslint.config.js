const { init } = require('./src');

module.exports = init(
  {
    fp: false,
    test: true,
    esm: true,
    node: true,
    strict: true,
    import: true,
    jest: true,
    vitest: true,
    next: true,
    cypress: true,
    react: true,
    storybook: true,
    typescript: true,
    tailwind: false,
  },
  {
    rules: {
      'max-lines-per-function': 'off',
      'complexity': 'off',
      'n/global-require': 'off',
    },
  },
  {
    files: ['tests/**/*.js', 'tests/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
);
