const fs = require('fs');
const { Packages } = require('@frontendmonster/utils');
const readPkgUp = require('read-pkg-up');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const packages = Packages(pkg);

/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['prettier', 'simple-import-sort', 'promise', 'node', 'fp'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    require.resolve('./storybook'),
    packages.ifAnyDep('jest', () => require.resolve('./jest')),
    packages.ifAnyDep('react', () => require.resolve('./react')),
    packages.ifAnyDep('typescript', () => require.resolve('./typescript')),
    packages.ifAnyDep('cypress', () => require.resolve('./cypress')),
    './rules/base',
    './rules/es2015',
    './rules/forbidden',
    './rules/style',
    './rules/variables',
    './rules/fp',
    './rules/promise',
    './rules/node',
    'prettier',
  ],
};
