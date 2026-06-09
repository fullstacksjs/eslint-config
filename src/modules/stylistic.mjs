import stylisticPlugin from '@stylistic/eslint-plugin';
import { mergeConfigs } from 'eslint-flat-config-utils';

import { objectOrEmpty } from '../utils/objectOrEmpty.mjs';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function stylistic(options = {}) {
  const overrides = objectOrEmpty(options.stylistic.overrides);

  const stylisticConfig = {
    name: 'stylistic',
    plugins: { '@stylistic': stylisticPlugin },
    rules: {
      '@stylistic/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never', propElementValues: 'always' }],
      '@stylistic/jsx-self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],
      '@stylistic/no-mixed-operators': 'off', //conflict with prettier
      '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: ['type', 'interface'], next: '*' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'never', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: '*', next: 'import' },
        { blankLine: 'always', prev: 'directive', next: 'import' },
        { blankLine: 'any', prev: ['if'], next: ['if'] },
      ],
      '@stylistic/lines-between-class-members': [
        'warn',
        {
          enforce: [
            { blankLine: 'never', prev: 'field', next: 'field' },
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' },
          ],
        },
      ],
    },
  };
  return mergeConfigs(stylisticConfig, overrides);
}

export default stylistic;
