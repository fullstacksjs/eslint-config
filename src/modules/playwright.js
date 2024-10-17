import plugin from 'eslint-plugin-playwright';

import { globs } from '../utils/globs.js';

/** @return { import('eslint').Linter.Config } */
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

export default playwright;
