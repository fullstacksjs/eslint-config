module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/new-cap': 'off',
    'babel/camelcase': ['error', { properties: 'always' }],
    'babel/no-invalid-this': 'error',
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/semi': ['warn', 'always'],
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'babel/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'babel/valid-typeof': 'error',
  },
};
