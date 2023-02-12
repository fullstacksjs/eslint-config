const { hasDep, isEsm } = require('./utils');

/** @param { import('./index.d').Options } opts */
const defaultOptions = {
  esm: isEsm(),
  cypress: hasDep('cypress'),
  graphql: hasDep('graphql'),
  react: hasDep('react') && !hasDep('next'),
  storybook: hasDep('storybook'),
  test: hasDep('jest') || hasDep('vitest'),
  typescript: hasDep('typescript'),
  import: true,
  node: true,
};

global.fullstacksjs = defaultOptions;
