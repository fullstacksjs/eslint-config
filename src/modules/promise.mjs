import { mergeConfigs } from 'eslint-flat-config-utils';
import plugin from 'eslint-plugin-promise';

import { strict } from '../utils/conditions.mjs';
import { objectOrEmpty } from '../utils/objectOrEmpty.mjs';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function promise(options = {}) {
  const overrides = objectOrEmpty(options.promise.overrides);

  /** @type { import('eslint/config').ConfigObject } */
  const promiseConfig = {
    name: 'promise',
    plugins: { promise: plugin },
    rules: {
      'promise/always-return': 'off',
      'promise/avoid-new': 'off',
      'promise/catch-or-return': 'off',
      'promise/no-callback-in-promise': 'off',
      'promise/no-native': 'off',
      'promise/no-nesting': 'off',
      'promise/no-new-statics': 'error',
      'promise/no-promise-in-callback': 'error',
      'promise/no-return-in-finally': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'warn',
      'promise/prefer-await-to-callbacks': 'off',
      'promise/prefer-await-to-then': 'off',
      'promise/prefer-catch': strict(options, 'warn'),
      'promise/valid-params': 'warn',
      'promise/no-multiple-resolved': 'warn',
      'promise/spec-only': 'warn',
    },
  };

  return mergeConfigs(promiseConfig, overrides);
}

export default promise;
