import { mergeConfigs } from 'eslint-flat-config-utils';
import plugin from 'eslint-plugin-perfectionist';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function perfectionist(options = {}) {
  const perfectionistConfig = {
    name: 'perfectionist',
    plugins: { perfectionist: plugin },
    rules: {
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-arrays': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-decorators': 'off',
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-export-attributes': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-heritage-clauses': 'warn',
      'perfectionist/sort-import-attributes': 'warn',
      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-intersection-types': [
        'warn',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        },
      ],
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-maps': 'off',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-sets': 'warn',
      'perfectionist/sort-switch-case': 'off',
      'perfectionist/sort-union-types': [
        'warn',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        },
      ],
      'perfectionist/sort-variable-declarations': 'warn',
    },
  };

  return mergeConfigs(perfectionistConfig, options.sort.overrides ?? {});
}

export default perfectionist;
