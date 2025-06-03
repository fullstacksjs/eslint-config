/**
 * @param { import('..').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
async function tailwind(options = {}) {
  const plugin = await import('eslint-plugin-tailwindcss');
  return {
    plugins: { tailwindcss: plugin.default ?? plugin },
    settings: {
      tailwindcss: {
        callees: options.callees ?? ['cva', 'classnames', 'classNames', 'class', 'clsx', 'cn', 'cns', 'cx'],
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
