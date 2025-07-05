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
        callees: [
          ['^class|classnames|classNames|cva|ctl|clsx|cn|cns|cx|cc|clb|cnb|dcnb|objstr|tv|twJoin|twMerge$', [{ match: 'strings' }]],
        ],
      },
    },
    rules: {
      'better-tailwindcss/no-duplicate-classes': 'error',
      'better-tailwindcss/no-conflicting-classes': 'error',
      'better-tailwindcss/no-unnecessary-whitespace': 'warn',
      'better-tailwindcss/enforce-consistent-class-order': 'warn',
      'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
    },
  };
}

export default tailwind;
