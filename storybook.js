/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      plugins: ['storybook'],
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: ['./rules/storybook.js'],
    },
  ],
};
