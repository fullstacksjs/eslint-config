const { predicate } = require('../utils/conditions');

/**
 * @param {import('../init.d.ts').Options} options
 * @return { import('eslint').Linter.FlatConfig }
 */
function strict(options = {}) {
  return {
    rules: {
      'no-console': 'warn',
      // ...predicate(options.typescript, { '@typescript-eslint/no-non-null-assertion': 'warn' }),
    },
  };
}

module.exports = strict;
