module.exports = {
  rules: {
    'default-param-last': 'warn',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^ignore(d)?',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
  },
};
