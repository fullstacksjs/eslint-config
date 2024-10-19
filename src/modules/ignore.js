import { ignoreGlobs } from '../utils/globs.js';
/**
 * @param { import('../option').Options } options
 * @return { import('eslint').Linter.Config }
 */
function ignores(options = {}) {
  return {
    ignores: [...ignoreGlobs, ...(options.ignores ?? [])],
  };
}

export default ignores;
