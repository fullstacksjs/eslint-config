/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      plugins: ['storybook'],
      files: ['*.stories.+(ts|tsx|js|jsx|mjs|cjs|mdx)', '*.story.+(ts|tsx|js|jsx|mjs|cjs|mdx)'],
      extends: ['./rules/storybook.js'],
    },
  ],
};
