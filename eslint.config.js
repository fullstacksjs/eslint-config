import { init } from './src/index.js';

export default init(
  {
    ignores: ['cjs/'],
    fp: false,
    test: true,
    esm: true,
    node: true,
    strict: true,
    import: true,
    jest: true,
    vitest: true,
    next: false,
    cypress: true,
    react: true,
    storybook: true,
    typescript: true,
    tailwind: false,
    rules: {
      'max-lines-per-function': 'off',
      'complexity': 'off',
    },
  },
  {
    files: ['tests/**/*.js', 'tests/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
);
