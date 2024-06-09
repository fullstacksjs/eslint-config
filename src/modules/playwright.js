const plugin = require('eslint-plugin-playwright');
const { globs } = require('../utils/globs');

/** @return { import('eslint').Linter.FlatConfig } */
function playwright() {
  return {
    plugins: { playwright: plugin },
    files: globs.e2e,
    rules: {
      'jest/no-standalone-expect': [
        'error',
        {
          additionalTestBlockFunctions: [
            'test.jestPlaywrightDebug',
            'it.jestPlaywrightDebug',
            'test.jestPlaywrightSkip',
            'it.jestPlaywrightSkip',
            'test.jestPlaywrightConfig',
            'it.jestPlaywrightConfig',
          ],
        },
      ],
      'playwright/missing-playwright-await': 'error',
      'playwright/no-page-pause': 'warn',
    },
  };
}

module.exports = playwright;
