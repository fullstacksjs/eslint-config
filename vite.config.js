import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['./src/index.mjs'],
    format: ['esm'],
    exports: {
      customExports: {
        '.': { types: './src/types/index.d.ts', default: './dist/index.mjs' },
      },
    },
  },
  fmt: {
    singleQuote: true,
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 140,
    proseWrap: 'always',
    quoteProps: 'consistent',
    requirePragma: false,
    semi: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    ignorePatterns: ['node_modules', 'dist'],
  },
  staged: {
    '*': 'vp check --fix',
  },
});
