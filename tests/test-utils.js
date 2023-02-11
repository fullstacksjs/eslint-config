const getOverrides = config => {
  const { files, ...conf } = config.overrides[0];
  return conf;
};

module.exports.getOverrides = getOverrides;
