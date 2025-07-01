/**
 * @param { import('..').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
async function tailwind(options = {}) {
  const plugin = await import('eslint-plugin-better-tailwindcss');
  return {
    plugins: { 'better-tailwindcss': plugin.default ?? plugin },
    settings: {
      'better-tailwindcss': {
        entryPoint: options.tailwind.entryPoint,
        tailwindConfig: options.tailwind.tailwindConfig,
      },
    },
    rules: {
      'better-tailwindcss/sort-classes': 'warn',
      'better-tailwindcss/no-duplicate-classes': 'error',
      'better-tailwindcss/no-conflicting-classes': 'error',
      'better-tailwindcss/no-unnecessary-whitespace': 'warn',
      'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
      'better-tailwindcss/multiline': 'off',
    },
  };
}

export default tailwind;
