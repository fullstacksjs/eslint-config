module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/brace-style': 'off', // prettier
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/comma-spacing': ['warn', { after: true, before: false }],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/func-call-spacing': 'off', // prettier
        '@typescript-eslint/generic-type-naming': 'off',
        '@typescript-eslint/indent': 'off', // prettier
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'off', // Annoying with autofix on save.
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-parens': 'off', // prettier
        '@typescript-eslint/no-extra-semi': 'off', // prettier
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-magic-numbers': ['off', { ignoreEnums: true }], // Not good enough yet
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': 'off', // prettier
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-untyped-public-signature': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars-experimental': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^[iI]gnore(d)?',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // I'm not sure...
        '@typescript-eslint/prefer-readonlysemi': 'off', // Annoying with autofix on save.
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': 'off', // prettier
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/space-before-function-paren': 'off', // prettier
        '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullable: true, allowSafe: true }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/typedef': [
          'error',
          {
            parameter: false,
            arrowParameter: false,
            variableDeclaration: false,
          },
        ],
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'error',

        // disable eslint rules which typescript extends
        'brace-style': 'off',
        'comma-spacing': 'off',
        'func-call-spacing': 'off',
        'no-dupe-class-members': 'off',
        'no-implied-eval': 'off',
        'no-throw-literal': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'require-await': 'off',
        'spaced-comment': 'off',
        'semi': 'off',
        'react/prop-types': ['off', { ignore: ['children', 'className'] }],

        // open issues
        'import/no-cycle': 'off', // PENDING: remove this on https://github.com/benmosher/eslint-plugin-import/issues/1453
      },
    },
  ],
};
