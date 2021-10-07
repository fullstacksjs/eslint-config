module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.js', '**/cypress/**/*.ts'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
      extends: ['./rules/cypress'],
    },
  ],
};
