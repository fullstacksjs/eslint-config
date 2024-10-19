import plugin from 'eslint-plugin-import-x';

import { predicate } from '../utils/conditions.mjs';

const tsExtensions = ['.ts', '.tsx', '.cts', '.mts', '.ctsx', '.mtsx'];
const jsExtensions = ['.mjs', '.js', '.jsx', '.cjs'];
const allExtensions = [...jsExtensions, ...tsExtensions];

/**
 * @param { import('../option').Options } options
 * @return { import('eslint').Linter.Config }
 */
function imports(options = {}) {
  const isObject = typeof options.import === 'object';
  const ignoreExtensions = {};
  if (!options.esm) {
    ignoreExtensions.js = 'never';
    ignoreExtensions.jsx = 'never';

    if (options.typescript) {
      ignoreExtensions.ts = 'never';
      ignoreExtensions.tsx = 'never';
    }
  }

  const config = {
    plugins: { import: plugin },

    settings: {
      'import-x/extensions': jsExtensions,
      'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import-x/ignore': ['node_modules', '\\.(scss|css|svg|json)$'],
      ...predicate(options.typescript, {
        'import-x/resolver': { typescript: true },
        'import-x/parsers': { '@typescript-eslint/parser': tsExtensions },
        'import-x/extensions': allExtensions,
      }),
      ...predicate(isObject && 'internalRegExp' in options.import, {
        'import-x/internal-regex': options.import.internalRegExp,
      }),
      ...predicate(isObject && 'lifetime' in options.import, {
        'import-x/cache': { lifetime: options.import.lifetime },
      }),
    },

    rules: {
      'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      'import/extensions': ['error', 'ignorePackages', ignoreExtensions],
      'import/first': 'error',
      'import/newline-after-import': 'warn',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-duplicates': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-default': 'error',
      'import/no-relative-packages': 'error',
      'import/no-self-import': 'error',
      'import/no-unresolved': ['error', { caseSensitiveStrict: true }],
      'import/no-useless-path-segments': 'warn',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'off',

      ...predicate(!options.disableExpensiveRules, {
        'import/default': 'error',
        'import/export': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/no-cycle': ['error', { maxDepth: Infinity }],
        'import/no-deprecated': 'warn',
        'import/no-named-as-default-member': 'error',
      }),

      'import/dynamic-import-chunkname': 'off',
      'import/exports-last': 'off',
      'import/group-exports': 'off',
      'import/max-dependencies': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/no-commonjs': 'off',
      'import/no-default-export': 'off',
      'import/no-dynamic-require': 'off',
      'import/no-import-module-exports': 'off',
      'import/no-internal-modules': 'off',
      'import/no-named-export': 'off',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/no-relative-parent-imports': 'off',
      'import/no-restricted-paths': 'off',
      'import/no-unassigned-import': 'off',
      'import/no-unused-modules': 'off',
      'import/prefer-default-export': 'off',
      'import/unambiguous': 'off',
    },
  };

  return config;
}

export default imports;