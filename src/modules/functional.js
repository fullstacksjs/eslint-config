import plugin from 'eslint-plugin-functional';

/**
 * @param { import('..').Options } options
 * @return { import('eslint').Linter.Config }
 */
function fp() {
  return {
    plugins: { functional: plugin },
    rules: {
      'functional/functional-parameters': 'off',
      'functional/no-let': ['error', { allowInForLoopInit: true }],
      'functional/no-loop-statements': 'error',
    },
  };
}

export default fp;
