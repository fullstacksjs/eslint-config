const { exts } = require('./utils');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: [`**/cypress/**/*.${exts}`, `**/*.cy.+${exts}`],
      plugins: ['jest', 'jest-formatting', 'cypress'],
      env: {
        'cypress/globals': true,
      },
      extends: ['./rules/test', './rules/cypress'],
    },
  ],
};
