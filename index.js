require('./registerOpts');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    require.resolve('./base'),
    require.resolve('./fp'),
    require.resolve('./import'),
    require.resolve('./node'),
    require.resolve('./promise'),
    require.resolve('./storybook'),
    require.resolve('./jest'),
    global.fullstacksjs?.cspell && require.resolve('./cspell'),
    global.fullstacksjs?.tailwind && require.resolve('./tailwind'),
    global.fullstacksjs?.react && require.resolve('./react'),
    global.fullstacksjs?.next && require.resolve('./next'),
    global.fullstacksjs?.typescript && require.resolve('./typescript'),
    global.fullstacksjs?.cypress && require.resolve('./cypress'),
    require.resolve('./prettier'),
  ].filter(Boolean),
};
