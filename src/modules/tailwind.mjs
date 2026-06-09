import { mergeConfigs } from 'eslint-flat-config-utils';

import { predicate, strict } from '../utils/conditions.mjs';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
async function tailwind(options = {}) {
  const plugin = await import('eslint-plugin-better-tailwindcss');
  const isObject = typeof options.tailwind === 'object';

  const tailwindConfig = {
    name: 'tailwind',
    plugins: { 'better-tailwindcss': plugin.default ?? plugin },
    settings: {
      'better-tailwindcss': {
        ...predicate(isObject && 'entryPoint' in options.tailwind, {
          entryPoint: options.tailwind.entryPoint,
        }),
        ...predicate(isObject && 'tailwindConfig' in options.tailwind, {
          tailwindConfig: options.tailwind.tailwindConfig,
        }),
        callees: [
          ['^class|classnames|classNames|cva|ctl|clsx|cn|cns|cx|cc|clb|cnb|dcnb|objstr|tv|twJoin|twMerge$', [{ match: 'strings' }]],
        ],
      },
    },
    rules: {
      'better-tailwindcss/enforce-canonical-classes': 'warn',
      'better-tailwindcss/enforce-consistent-class-order': 'warn',
      'better-tailwindcss/enforce-consistent-important-position': 'warn',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
      'better-tailwindcss/enforce-consistent-variant-order': 'warn',
      'better-tailwindcss/enforce-logical-properties': strict('warn'),
      'better-tailwindcss/enforce-shorthand-classes': 'warn',
      'better-tailwindcss/no-conflicting-classes': 'error',
      'better-tailwindcss/no-deprecated-classes': 'warn',
      'better-tailwindcss/no-duplicate-classes': 'error',
      'better-tailwindcss/no-restricted-classes': 'warn',
      'better-tailwindcss/no-unknown-classes': strict('warn'),
      'better-tailwindcss/no-unnecessary-whitespace': 'warn',
    },
  };

  return mergeConfigs(tailwindConfig, options.tailwind.overrides ?? {});
}

export default tailwind;
