module.exports = {
  rules: {
    '@babel/new-cap': 'off',
    '@babel/no-invalid-this': ['error', { capIsConstructor: false }],
    '@babel/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
    ],
    '@babel/object-curly-spacing': ['off', 'always'], // in favor of prettier
    '@babel/semi': ['off', 'always'], // in favor of prettier
  },
};
