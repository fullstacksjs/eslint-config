import plugin from 'eslint-plugin-promise';

import { strict } from '../utils/conditions.mjs';

/** @return { import('eslint').Linter.Config } */
function promise(options = {}) {
  return {
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
}

export default promise;
