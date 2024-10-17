import globals from 'globals';

import { strict } from '../utils/conditions.js';

/**
 * @param { import('../option.d.ts').Options } options
 * @return { import('eslint').Linter.Config }
 */
function base(options = {}) {
  return {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'camelcase': ['warn', { properties: 'always' }],
      'complexity': ['error', 14],
      'constructor-super': 'error',
      'default-case-last': 'error',
      'default-case': 'error',
      'default-param-last': 'warn',
      'dot-notation': 'error',
      'eqeqeq': ['error', 'smart'],
      'for-direction': 'error',
      'func-name-matching': 'error',
      'func-names': 'error',
      'getter-return': ['error', { allowImplicit: true }],
      'guard-for-in': 'error',
      'max-depth': ['error', 4],
      'max-lines-per-function': ['error', 150],
      'max-lines': ['error', { max: 2500, skipBlankLines: false, skipComments: false }],
      'max-nested-callbacks': ['error', 7],
      'max-params': ['error', 7],
      'max-statements': ['error', 40],
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'warn',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-empty-function': 'warn',
      'no-empty-pattern': 'error',
      'no-empty-static-block': 'warn',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'warn',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-loss-of-precision': 'warn',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-new': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-octal': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-globals': ['error', { name: 'event', message: 'Use local parameter instead.' }],
      'no-restricted-syntax': ['error', 'WithStatement'],
      'no-return-assign': 'error',
      'no-return-await': 'warn',
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-shadow': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-labels': 'error',
      'no-unused-private-class-members': 'warn',
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^ignore(d)?', args: 'after-used', ignoreRestSiblings: true },
      ],
      'no-use-before-define': ['error', 'nofunc'],
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'warn',
      'no-warning-comments': ['warn', { terms: ['fixme'], location: 'anywhere' }],
      'object-shorthand': ['error', 'properties'],
      'one-var': ['error', { uninitialized: 'never', initialized: 'never' }],
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: true, allowUnboundThis: true }],
      'prefer-const': 'warn',
      'prefer-exponentiation-operator': 'warn',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'warn',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-await': 'error',
      'require-yield': 'error',
      'strict': 'error',
      'symbol-description': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'vars-on-top': 'error',
      'yoda': 'error',

      'require-atomic-updates': 'warn',
      'no-async-promise-executor': 'warn',
      'grouped-accessor-pairs': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-param-reassign': 'warn',
      'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],

      'no-console': strict(options, 'warn'),
    },
  };
}

export default base;
