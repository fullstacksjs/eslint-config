export const namingConvention = [
  {
    selector: 'default',
    format: ['camelCase'],
    filter: { regex: '^_+$', match: false },
  },
  { selector: 'import', format: null },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },
  // variables, CONSTANTS, ReactComponents
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    filter: { regex: '^_+$', match: false },
  },
  {
    selector: 'parameter',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    filter: { regex: '^_+$', match: false },
  },
  { selector: 'memberLike', format: null },
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
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: { regex: '^I[A-Z]', match: false },
  },
];
