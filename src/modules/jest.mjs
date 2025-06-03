import plugin from 'eslint-plugin-jest';

import { globs } from '../utils/globs.mjs';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config } */
function jest() {
  return {
    files: globs.test,
    plugins: { jest: plugin },
    rules: {
      'jest/consistent-test-it': 'off',
      'jest/expect-expect': 'off',
      'jest/lowercase-name': 'off',
      'jest/max-nested-describe': ['error', { max: 2 }],
      'jest/no-alias-methods': 'error',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-conditional-in-test': 'error',
      'jest/no-confusing-set-timeout': 'warn',
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
      'jest/prefer-lowercase-title': 'off',
      'jest/prefer-mock-promise-shorthand': 'warn',
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
      'jest/no-deprecated-functions': 'error',

      // ...predicate(options.typescript, {
      //   '@typescript-eslint/unbound-method': 'off',
      //   'jest/unbound-method': 'error',
      //   'jest/no-untyped-mock-factory': 'warn',
      // }),
    },
  };
}

export default jest;
