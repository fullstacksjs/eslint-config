import plugin from 'eslint-plugin-perfectionist';

/**
 * @return { import('eslint').Linter.Config }
 */
function perfectionist() {
  return {
    plugins: { perfectionist: plugin },
    rules: {
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-classes': 'warn',
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': ['warn', {}],
      'perfectionist/sort-interfaces': 'off',
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
      'perfectionist/sort-jsx-props': [
        'warn',
        {
          groups: ['attr', 'shorthand', 'size', 'unknown', 'callback', 'multiline'],
          customGroups: { callback: 'on*', size: ['width', 'size', 'height'], attr: ['dir', 'lang'] },
        },
      ],
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
}

export default perfectionist;
