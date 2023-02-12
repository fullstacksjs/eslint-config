require('./registerOpts');
const { compact } = require('@fullstacksjs/toolbox');
const { hasDep } = require('./utils');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: compact([
    require.resolve('./base'),
    require.resolve('./fp'),
    require.resolve('./import'),
    require.resolve('./node'),
    require.resolve('./promise'),
    require.resolve('./storybook'),
    require.resolve('./jest'),
    hasDep('react') && !hasDep('next') && require.resolve('./react'),
    hasDep('typescript') && require.resolve('./typescript'),
    hasDep('cypress') && require.resolve('./cypress'),
    require.resolve('./prettier'),
  ]),
};
