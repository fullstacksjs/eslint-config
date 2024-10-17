import { ignoreGlobs } from './globs.js';

/**
 * @param { (options: import('eslint').Linter.Config) => import('eslint').Linter.Config } module
 * @param { import('../option').Options } options
 * @return { import('eslint').Linter.Config }
 */
export function compose(module, options) {
  const config = module(options);
  config.ignores = [...(config.ignores ?? []), ...(options.ignores ?? []), ...(ignoreGlobs ?? [])];
  return config;
}
