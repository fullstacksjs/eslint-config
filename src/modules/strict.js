/**
 * @param {import('../init.d.ts').Options} options
 * @return { import('eslint').Linter.FlatConfig }
 */
function strict() {
  return {
    rules: {
      'no-console': 'warn',
    },
  };
}

module.exports = strict;
