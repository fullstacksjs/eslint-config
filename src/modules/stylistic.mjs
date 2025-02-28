import stylisticPlugin from '@stylistic/eslint-plugin';

/**
 * @param { import('../option').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function stylistic() {
  return {
    plugins: { '@stylistic': stylisticPlugin },
    rules: {
      '@stylistic/jsx/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never', propElementValues: 'always' }],
    },
  };
}

export default stylistic;
