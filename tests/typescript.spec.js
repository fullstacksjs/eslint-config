require('../registerOpts');
const ts = require('../typescript');
const tc = require('../typecheck');

module.exports = {
  rules: {
    ...ts.overrides[0].rules,
    ...tc.overrides[0].rules,
  },
};
