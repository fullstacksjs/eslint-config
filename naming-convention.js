module.exports = [
  {
    selector: 'default',
    format: ['camelCase'],
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },
  // variables, CONSTANTS, ReactComponents
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
  },
  {
    selector: 'parameter',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allowSingleOrDouble',
  },
  {
    selector: 'memberLike',
    format: null,
  },
  {
    selector: 'memberLike',
    modifiers: ['static'],
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
  },
  // disallow I prefix for interfaces
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: { regex: '^I[A-Z]', match: false },
  },
];
