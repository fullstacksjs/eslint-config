import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['./src/index.mjs'],
    exports: true,
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
    ignorePatterns: ['node_modules'],
  },
  staged: {
    '*': 'vp check --fix',
  },
});
