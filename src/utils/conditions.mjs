/**
 * @param {{strict?: boolean}} options
 * @param {import('eslint').Linter.RuleEntry} config
 * @returns {import('eslint').Linter.RuleEntry}
 */
export const strict = (options, config) => {
  return options.strict ? config : 'off';
};

/**
 * @param {boolean} options
 * @param {import('eslint').Linter.RulesRecord} config
 * @returns {import('eslint').Linter.RulesRecord | undefined}
 */
export const predicate = (condition, config) => {
  return condition ? config : undefined;
};
