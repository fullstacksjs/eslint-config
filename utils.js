const readPkgUp = require('read-pkg-up');
const fs = require('node:fs');

const { packageJson } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const hasProperty = (obj, prop) => typeof obj === 'object' && Reflect.has(obj, prop);

const hasDep = dep => {
  const types = ['peerDependencies', 'dependencies', 'devDependencies', 'optionalDependencies'];
  return types.some(type => hasProperty(packageJson[type], dep));
};

const isEsm = () => {
  return packageJson.type === 'module';
};

module.exports.hasDep = hasDep;
module.exports.isEsm = isEsm;
module.exports.exts = '+(js|jsx|mjs|cjs|ts|tsx|mts|cts)';
