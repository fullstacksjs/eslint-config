const fs = require('fs');
const { Packages } = require('@frontendmonster/utils');
const readPkgUp = require('read-pkg-up');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const packages = Packages(pkg);

module.exports = {
  extends: [
    require.resolve('./configs/base'),
    packages.ifAnyDep('jest', () => require.resolve('./configs/jest')),
    packages.ifAnyDep('react', () => require.resolve('./configs/react')),
    packages.ifAnyDep('typescript', () => require.resolve('./configs/typescript')),
  ].filter(Boolean),
};
