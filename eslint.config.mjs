import { defineConfig } from './src/index.mjs';

export default defineConfig(
  {
    ignores: ['cjs/'],
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
    regex: true,
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
