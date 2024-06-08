const plugin = require('eslint-plugin-tailwindcss');

/** @return { Promise<import('eslint').Linter.FlatConfig> } */
function tailwind() {
  return {
    plugins: { tailwindcss: plugin },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  };
}

module.exports = tailwind;
