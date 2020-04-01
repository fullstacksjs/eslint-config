const { ifAnyDep } = require('./utils');

module.exports = {
  extends: [
    require.resolve('./configs/base'),
    ifAnyDep('jest', require.resolve('./configs/jest')),
    ifAnyDep('react', require.resolve('./configs/react')),
    ifAnyDep('typescript', require.resolve('./configs/typescript')),
  ].filter(Boolean),
};
