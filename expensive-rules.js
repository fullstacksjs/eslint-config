module.exports = config => {
  if (global.fullstacksjs?.disableExpensiveRules) return 'off';
  return config;
};
