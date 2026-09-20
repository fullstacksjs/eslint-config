import { mergeConfigs } from 'eslint-flat-config-utils';
import plugin from 'eslint-plugin-jest';
import globals from 'globals';

import { predicate } from '../utils/conditions.mjs';
import { globs } from '../utils/globs.mjs';
import { objectOrEmpty } from '../utils/objectOrEmpty.mjs';

/**
 * @param { import('../types').Options } options
 * @return { import('eslint').Linter.Config } */
function jest(options = {}) {
  const projectService = options.typescript && options.typescript.tsconfigRootDir && options.typescript.projectService;
  const overrides = objectOrEmpty(options.jest.overrides);

  /** @type { import('eslint/config').ConfigObject } */
  const jestConfig = {
    name: 'jest',
    files: globs.test,
    plugins: { jest: plugin },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'jest/consistent-test-it': 'off',
      'jest/expect-expect': 'off',
      'jest/max-nested-describe': ['error', { max: 2 }],
      'jest/max-expects': 'off',
      'jest/no-alias-methods': 'error',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-conditional-in-test': 'error',
      'jest/no-confusing-set-timeout': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-duplicate-hooks': 'error',
      'jest/no-done-callback': 'warn',
      'jest/no-export': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      ...predicate(projectService, {
        'jest/no-error-equal': 'error',
        'jest/no-unnecessary-assertion': 'warn',
        'jest/valid-expect-with-promise': 'error',
      }),
      'jest/no-hooks': 'off',
      'jest/no-interpolation-in-snapshots': 'error',
      'jest/no-jasmine-globals': 'off',
      'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
      'jest/no-mocks-import': 'error',
      'jest/no-restricted-jest-methods': 'off',
      'jest/no-restricted-matchers': 'error',
      'jest/no-standalone-expect': 'off',
      'jest/no-test-prefixes': 'error',
      'jest/no-test-return-statement': 'off',
      'jest/no-unneeded-async-expect-function': 'warn',
      'jest/padding-around-after-all-blocks': 'off',
      'jest/padding-around-after-each-blocks': 'off',
      'jest/padding-around-all': 'off',
      'jest/padding-around-before-all-blocks': 'off',
      'jest/padding-around-before-each-blocks': 'off',
      'jest/padding-around-describe-blocks': 'off',
      'jest/padding-around-expect-groups': 'off',
      'jest/padding-around-test-blocks': 'off',
      'jest/prefer-called-with': 'error',
      'jest/prefer-comparison-matcher': 'warn',
      'jest/prefer-ending-with-an-expect': 'off',
      'jest/prefer-equality-matcher': 'warn',
      'jest/prefer-each': 'warn',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-expect-resolves': 'warn',
      'jest/prefer-hooks-on-top': 'error',
      'jest/prefer-hooks-in-order': 'warn',
      'jest/prefer-importing-jest-globals': 'off',
      'jest/prefer-jest-mocked': 'warn',
      'jest/prefer-lowercase-title': 'off',
      'jest/prefer-mock-promise-shorthand': 'warn',
      'jest/prefer-mock-return-shorthand': 'warn',
      'jest/prefer-snapshot-hint': 'warn',
      'jest/prefer-spy-on': 'off',
      'jest/prefer-strict-equal': 'off',
      'jest/prefer-to-be': 'warn',
      'jest/prefer-to-contain': 'warn',
      'jest/prefer-to-have-been-called': 'warn',
      'jest/prefer-to-have-been-called-times': 'warn',
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
      'jest/valid-mock-module-path': 'warn',

      // ...predicate(options.typescript, {
      //   '@typescript-eslint/unbound-method': 'off',
      //   'jest/unbound-method': 'error',
      //   'jest/no-untyped-mock-factory': 'warn',
      // }),
    },
  };

  return mergeConfigs(jestConfig, overrides);
}

export default jest;
