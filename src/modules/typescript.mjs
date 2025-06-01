import { parser, plugin } from 'typescript-eslint';

import { predicate } from '../utils/conditions.mjs';
import { globs } from '../utils/globs.mjs';
import { namingConvention } from '../utils/naming-convention.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function typescript(options = {}) {
  const projectService = options.typescript && options.typescript.tsconfigRootDir && options.typescript.projectService;

  return {
    files: [globs.ts, globs.tsx],
    plugins: { '@typescript-eslint': plugin },
    languageOptions: {
      parser,
      parserOptions: {
        ...options.typescript,
      },
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': 'allow-with-description',
          'minimumDescriptionLength': 3,
        },
      ],
      '@typescript-eslint/ban-tslint-comment': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/generic-type-naming': 'off',
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/member-naming': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/method-signature-style': ['warn', 'property'],
      '@typescript-eslint/naming-convention': [
        'warn',
        ...namingConvention,
        ...(projectService
          ? [
              {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'enable', 'loading'],
              },
            ]
          : []),
      ],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-base-to-string': 'off', // false negative
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'off', // Annoying with auto-fix on save.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': ['warn', { allowWithDecorator: true }],
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-magic-numbers': ['off', { ignoreEnums: true }], // Not good enough yet
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      ...predicate(options.strict, { '@typescript-eslint/no-non-null-assertion': 'warn' }),
      '@typescript-eslint/no-redeclare': ['off', { ignoreDeclarationMerge: true }], // useful in FP.
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-restricted-imports': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-type-alias': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-untyped-public-signature': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^([iI]gnore(d)?)|(_+)',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-useless-empty-export': 'warn',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'off',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'off',
        { checkParameterProperties: true, ignoreInferredTypes: false, treatMethodsAsReadonly: true },
      ], // I'm not sure...
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/prefer-readonlysemi': 'off', // Annoying with auto-fix on save.
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off', // Annoying
      '@typescript-eslint/space-before-blocks': 'off',

      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/typedef': ['error', { parameter: false, arrowParameter: false, variableDeclaration: false }],
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/key-spacing': 'off',

      ...predicate(projectService, {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-return': 'off',
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
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-meaningless-void-operator': ['warn', { checkNever: false }],
        ...predicate(!options.disableExpensiveRules, {
          '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
          '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: { attributes: false } }],
        }),
        '@typescript-eslint/no-misused-spread': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-unnecessary-type-conversion': 'error',
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
        '@typescript-eslint/no-unnecessary-template-expression': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/only-throw-error': ['warn', { allowRethrowing: true }],
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
        '@typescript-eslint/related-getter-setter-pairs': 'error',
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

        // collisions
        'prefer-promise-reject-errors': 'off',
        'consistent-return': 'off',
      }),

      // open issues
      'react/jsx-no-useless-fragment': 'off', // Need useless-fragment for JSX return type

      // Conflicts with @typescript-eslint
      'no-empty-function': 'off',
      'default-case': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'key-spacing': 'off',
      'camelcase': 'off',
      'default-param-last': 'off',
      'init-declarations': 'off',
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
      'no-undef': 'off',
    },
  };
}

export default typescript;
