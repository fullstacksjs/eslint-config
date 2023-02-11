/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      plugins: ['storybook'],
      files: ['*.stories.+(ts|tsx|js|jsx|mjs|cjs|mdx)', '*.story.+(ts|tsx|js|jsx|mjs|cjs|mdx)'],
      rules: {
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'warn',
        'storybook/no-redundant-story-name': 'warn',
        'storybook/no-uninstalled-addons': 'error',
        'storybook/prefer-pascal-case': 'warn',
        'storybook/story-exports': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',

        'storybook/csf-component': 'warn',
        'storybook/no-stories-of': 'warn',
        'storybook/no-title-property-in-meta': 'warn',
        'storybook/meta-inline-properties': 'off',
      },
    },
  ],
};
