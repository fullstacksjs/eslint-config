const { Packages } = require('@fullstacksjs/toolbox');
const readPkgUp = require('read-pkg-up');
const fs = require('node:fs');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

module.exports = Packages(pkg);
