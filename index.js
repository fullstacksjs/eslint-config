const packages = require('./packages');
const { compact } = require('@fullstacksjs/toolbox');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: compact([
    require.resolve('./base'),
    require.resolve('./storybook'),
    require.resolve('./jest'),
    packages.ifAnyDep('react', () => require.resolve('./react')),
    packages.ifAnyDep('typescript', () => require.resolve('./typescript')),
    packages.ifAnyDep('cypress', () => require.resolve('./cypress')),
  ]),
};
