const expensiveRules = require('./expensive-rules');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/dot-notation': [
          'warn',
          {
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: true,
          },
        ],
        '@typescript-eslint/no-confusing-void-expression': ['off', { ignoreArrowShorthand: true, ignoreVoidOperator: true }], // Annoying and conflict with @typescript-eslint/no-meaningless-void-operator
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        '@typescript-eslint/no-floating-promises': expensiveRules(['error', { ignoreVoid: true }]),
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-meaningless-void-operator': ['warn', { checkNever: false }],
        '@typescript-eslint/no-misused-promises': expensiveRules(['warn', { checksVoidReturn: { attributes: false } }]),
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-throw-literal': ['warn', { allowThrowingUnknown: false }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
        '@typescript-eslint/no-unnecessary-condition': [
          'warn',
          {
            allowConstantLoopConditions: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          },
        ],
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        '@typescript-eslint/no-useless-template-literals': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: false,
            ignoreTernaryTests: false,
            ignoreMixedLogicalExpressions: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          },
        ],
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-promise-reject-errors': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/restrict-template-expressions': [
          'warn',
          { allowNumber: true, allowBoolean: false, allowAny: false, allowNullish: false, allowRegExp: false, allowNever: false },
        ],
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/naming-convention': [
          'warn',
          ...require('./naming-convention'),
          // force use is/should/has for boolean variables
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'enable', 'loading'],
          },
        ],

        // collisions
        'dot-notation': 'off',
        'prefer-promise-reject-errors': 'off',
      },
    },
  ],
};
