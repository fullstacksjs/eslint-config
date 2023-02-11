const packages = require('./packages');
const { compact } = require('@fullstacksjs/toolbox');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: compact([
    './base',
    './fp',
    './import',
    './node',
    './promise',
    './storybook',
    './jest',
    packages.ifAnyDep('typescript', () => require.resolve('./typescript')),
    packages.ifAnyDep('cypress', () => require.resolve('./cypress')),
    'prettier',
  ]),
};
