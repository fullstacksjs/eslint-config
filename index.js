const fs = require('fs');
const { Packages } = require('@frontendmonster/utils');
const readPkgUp = require('read-pkg-up');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const packages = Packages(pkg);

module.exports = {
  extends: [
    require.resolve('./base'),
    packages.ifAnyDep('jest', () => require.resolve('./jest')),
    packages.ifAnyDep('react', () => require.resolve('./react')),
    packages.ifAnyDep('typescript', () => require.resolve('./typescript')),
    packages.ifAnyDep('cypress', () => require.resolve('./cypress')),
  ].filter(Boolean),
};
