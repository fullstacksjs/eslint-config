/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.+(js|jsx)', '**/cypress/**/*.+(ts|tsx)'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
      extends: ['./rules/cypress'],
    },
  ],
};
