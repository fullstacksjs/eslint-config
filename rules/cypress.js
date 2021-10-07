module.exports = {
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',

    // other modules
    'max-lines-per-function': ['off'],
    '@typescript-eslint/method-signature-style': ['off'],
    '@typescript-eslint/no-namespace ': ['off'],
  },
};
