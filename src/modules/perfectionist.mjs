import plugin from 'eslint-plugin-perfectionist';

/**
 * @return { import('eslint').Linter.Config }
 */
function perfectionist() {
  return {
    plugins: { perfectionist: plugin },
    rules: {
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-astro-attributes': 'warn',
      'perfectionist/sort-classes': 'warn',
      'perfectionist/sort-enums': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': ['warn', {}],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-maps': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-sets': 'warn',
      'perfectionist/sort-svelte-attributes': 'warn',
      'perfectionist/sort-switch-case': 'warn',
      'perfectionist/sort-union-types': 'warn',
      'perfectionist/sort-variable-declarations': 'warn',
      'perfectionist/sort-vue-attributes': 'warn',
    },
  };
}

export default perfectionist;
