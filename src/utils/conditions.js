/**
 * @param {{strict?: boolean}} options
 * @param {import('eslint').Linter.RuleEntry} config
 * @returns {import('eslint').Linter.RuleEntry}
 */
const strictRule = (options, config) => {
  return options.strict ? config : 'off';
};

/**
 * @param {boolean} options
 * @param {import('eslint').Linter.RulesRecord} config
 * @returns {import('eslint').Linter.RulesRecord | undefined}
 */
const predicate = (condition, config) => {
  return condition ? config : undefined;
};

module.exports.strict = strictRule;
module.exports.predicate = predicate;
