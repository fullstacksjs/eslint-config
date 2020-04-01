const fs = require('fs');
const has = require('lodash.has');
const { toArray } = require('@frontendmonster/utils');
const readPkgUp = require('read-pkg-up');

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const hasPkgProp = props => toArray(props).some(prop => has(pkg, prop));
const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(toArray(props).map(p => `${pkgProp}.${p}`));
const hasPeerDep = hasPkgSubProp('peerDependencies');
const hasDep = hasPkgSubProp('dependencies');
const hasDevDep = hasPkgSubProp('devDependencies');
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args));
const ifAnyDep = (deps, t, f) => (hasAnyDep(toArray(deps)) ? t : f);

module.exports = { ifAnyDep };
