/** @type { import('eslint').Linter.Config } */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': ['off', 'as-needed'], // Annoying
    'block-scoped-var': 'error',
    'brace-style': 'off', // prettier
    'camelcase': ['warn', { properties: 'always' }],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-spacing': ['warn', { after: true, before: false }],
    'complexity': ['error', 14],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'warn',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'for-direction': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'getter-return': ['error', { allowImplicit: true }],
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': ['error', '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$'], // __filename, camelCase, PascalCase, CONST_VALUE, stream$, $el
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
    'logical-assignment-operators': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': ['error', { max: 2500, skipBlankLines: false, skipComments: false }],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'warn',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off', // Handled by import plugin
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'warn',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
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
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'off',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off', // Some libs need curly in string for internal templates.
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'off',
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
    'no-void': 'off',
    'no-warning-comments': ['warn', { terms: ['fixme'], location: 'anywhere' }],
    'no-with': 'off',
    'object-shorthand': ['error', 'properties'],
    'one-var': ['error', { uninitialized: 'never', initialized: 'never' }],
    'operator-assignment': 'off',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true, allowUnboundThis: true }],
    'prefer-const': 'warn',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'warn',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['warn', 'always', { markers: ['/'] }], // ignore typescript triple-slash
    'strict': 'error',
    'symbol-description': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'yoda': 'error',

    ...(global.fullstacksjs?.typescript && {
      'key-spacing': 'off',
      'camelcase': 'off',
      'default-param-last': 'off',
      'init-declarations': 'off',
      'lines-between-class-members': 'off',
      'no-invalid-this': 'off',
      'no-loop-func': 'off',
      'no-redeclare': 'off',
      'no-restricted-imports': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'object-curly-spacing': 'off',
      'padding-line-between-statements': 'off',
      'space-before-blocks': 'off',
      'dot-notation': 'off',
      'no-throw-literal': 'off',
      'require-await': 'off',
    }),
  },
};
