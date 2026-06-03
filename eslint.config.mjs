import { defineConfig } from './src/index.mjs';

export default defineConfig(
  {
    ignores: ['cjs/'],
    base: true,
    stylistic: true,
    promise: true,
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
    typescript: {
      projectService: {
        allowDefaultProject: ['src/types/index.d.ts', 'src/types/modules/*.d.ts', 'tests/ts.ts'],
      },
    },
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
