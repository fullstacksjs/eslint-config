module.exports = {
  rules: {
    'babel/camelcase': ['error', { properties: 'always' }],
    'babel/new-cap': 'off',
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'babel/semi': ['warn', 'always'],
    'babel/valid-typeof': 'error',
  },
};
