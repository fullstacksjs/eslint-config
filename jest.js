const { exts } = require('./utils');

const dirs = '+(test|tests|__test__|__tests__|spec|specs)';

/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  overrides: [
    {
      files: [`**/${dirs}/**/*.${exts}`, `**/**/*.+(spec|test|e2e-spec|e2e-test).${exts}`],
      plugins: ['jest', 'jest-formatting'],
      env: {
        'jest/globals': true,
      },
      extends: [require.resolve('./test')],
      rules: {
        'jest/consistent-test-it': 'off',
        'jest/expect-expect': 'off',
        'jest/lowercase-name': 'off',
        'jest/max-nested-describe': ['error', { max: 2 }],
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'warn',
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-done-callback': 'warn',
        'jest/no-expect-resolves': 'off',
        'jest/no-export': 'error',
        'jest/no-hooks': 'off',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'off',
        'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-restricted-matchers': 'error',
        'jest/no-standalone-expect': 'off',
        'jest/no-test-callback': 'off',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'off',
        'jest/no-truthy-falsy': 'off',
        'jest/prefer-called-with': 'error',
        'jest/prefer-each': 'warn',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-inline-snapshots': 'off',
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-snapshot-hint': 'warn',
        'jest/prefer-spy-on': 'off',
        'jest/prefer-strict-equal': 'off',
        'jest/prefer-to-be-null': 'off',
        'jest/prefer-to-be-undefined': 'off',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-hook': 'off',
        'jest/require-to-throw-message': 'off',
        'jest/require-top-level-describe': 'off',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'warn',

        'jest/no-deprecated-functions': 'off',
        ...(global.fullstacksjs?.jest && {
          'jest/no-deprecated-functions': 'error',
        }),

        ...(global.fullstacksjs?.typescript?.resolverProject && {
          '@typescript-eslint/unbound-method': 'off',
          'jest/unbound-method': 'error',
          'jest/no-untyped-mock-factory': 'warn',
        }),

        // conflicts
        'fp/no-let': 'off',
      },
    },
  ],
};
