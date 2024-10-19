/** @return { Promise<import('eslint').Linter.Config> } */
function tailwind() {
  return {
    plugins: {
      get tailwindcss() {
        return import('eslint-plugin-tailwindcss');
      },
    },
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

export default tailwind;
