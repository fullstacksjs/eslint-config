require('./registerOpts');
const { compact } = require('@fullstacksjs/toolbox');

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
    global.fullstacksjs?.react && require.resolve('./react'),
    global.fullstacksjs?.typescript && require.resolve('./typescript'),
    global.fullstacksjs?.cypress && require.resolve('./cypress'),
    require.resolve('./prettier'),
  ]),
};
