require('../registerOpts');
const config = require('../cypress');
const { getOverrides } = require('./test-utils');

module.exports = {
  ...getOverrides(config),
  plugins: ['cypress'],
  extends: [],
};
