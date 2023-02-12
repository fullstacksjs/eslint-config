const { exts } = require('./utils');

/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  overrides: [
    {
      files: [`**/cypress/**/*.${exts}`, `**/*.cy.+${exts}`],
      plugins: ['jest', 'jest-formatting', 'cypress'],
      env: {
        'cypress/globals': true,
      },
      extends: [require.resolve('./test')],
      rules: {
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/no-force': 'warn',
        'cypress/no-pause': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/require-data-selectors': 'off',

        ...(global.fullstacksjs?.typescript && {
          '@typescript-eslint/no-namespace': 0,
        }),
      },
    },
  ],
};
