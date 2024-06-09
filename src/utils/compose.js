const { ignoreGlobs } = require('./globs');

/**
 * @param { (options: import('eslint').Linter.FlatConfig) => import('eslint').Linter.FlatConfig } module
 * @param { import('../init').Options } options
 * @return { import('eslint').Linter.FlatConfig }
 */
function compose(module, options) {
  const config = module(options);
  config.ignores = [...(config.ignores ?? []), ...(options.ignores ?? []), ...(ignoreGlobs ?? [])];
  return config;
}

module.exports = compose;
