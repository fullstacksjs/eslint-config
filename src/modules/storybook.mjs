import { mergeConfigs } from 'eslint-flat-config-utils';
import plugin from 'eslint-plugin-storybook';

import { globs } from '../utils/globs.mjs';
import { objectOrEmpty } from '../utils/objectOrEmpty.mjs';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function storybook(options = {}) {
  const overrides = objectOrEmpty(options.storybook.overrides);

  /** @type { import('eslint/config').ConfigObject } */
  const storybookConfig = {
    name: 'storybook',
    files: globs.storybook,
    plugins: { storybook: plugin },
    rules: {
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/meta-satisfies-type': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/no-renderer-packages': 'warn',
      'storybook/no-uninstalled-addons': 'error',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',

      'storybook/csf-component': 'warn',
      'storybook/meta-inline-properties': 'off',
      'storybook/no-stories-of': 'warn',
      'storybook/no-title-property-in-meta': 'off',

      // Conflicts
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@eslint-react/no-useless-fragment': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  };

  return mergeConfigs(storybookConfig, overrides);
}

export default storybook;
