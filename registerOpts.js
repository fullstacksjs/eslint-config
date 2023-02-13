const { hasDep, isEsm } = require('./utils');

/** @param { import('./init').Options } opts */
const defaultOptions = {
  esm: isEsm(),
  cypress: hasDep('cypress'),
  graphql: hasDep('graphql'),
  react: hasDep('react'),
  storybook: hasDep('@storybook/react'),
  test: hasDep('jest') || hasDep('vitest'),
  typescript: hasDep('typescript'),
  import: true,
  node: true,
};

global.fullstacksjs = defaultOptions;
