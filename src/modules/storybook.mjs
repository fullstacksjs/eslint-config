import plugin from 'eslint-plugin-storybook';

import { globs } from '../utils/globs.mjs';

/** @return { import('eslint').Linter.Config } */
function storybook() {
  return {
    files: globs.storybook,
    plugins: { storybook: plugin },
    rules: {
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/meta-satisfies-type': 'warn',
      'storybook/no-redundant-story-name': 'warn',
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
      'react/jsx-no-useless-fragment': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  };
}

export default storybook;
