require('../registerOpts');
const config = require('../jest');
const { getOverrides } = require('./test-utils');

module.exports = getOverrides(config);
