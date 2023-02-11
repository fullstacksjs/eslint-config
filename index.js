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
    packages.ifAnyDep('react', () => './react'),
    packages.ifAnyDep('typescript', () => './typescript'),
    packages.ifAnyDep('cypress', () => './cypress'),
    './prettier',
  ]),
};
