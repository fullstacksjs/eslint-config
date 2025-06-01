import stylisticPlugin from '@stylistic/eslint-plugin';

/**
 * @param { import('..').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function stylistic() {
  return {
    plugins: { '@stylistic': stylisticPlugin },
    rules: {
      '@stylistic/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never', propElementValues: 'always' }],
    },
  };
}

export default stylistic;
