import plugin from 'eslint-plugin-playwright';

import { globs } from '../utils/globs.mjs';

/** @return { import('eslint').Linter.Config } */
function playwright() {
  return {
    plugins: { playwright: plugin },
    files: globs.e2e,
    rules: {
      'playwright/consistent-spacing-between-blocks': 'warn',
      'playwright/expect-expect': 'error',
      'playwright/missing-playwright-await': 'error',
      'playwright/max-nested-describe': ['warn', { max: 5 }],
      'playwright/no-duplicate-hooks': 'error',
      'playwright/no-element-handle': 'warn',
      'playwright/no-eval': 'warn',
      'playwright/no-page-pause': 'warn',
      'playwright/no-slowed-test': 'warn',
      'playwright/no-skipped-test': 'warn',
      'playwright/no-standalone-expect': 'warn',
      'playwright/no-focused-test': 'warn',
      'playwright/no-force-option': 'warn',
      'playwright/no-conditional-expect': 'warn',
      'playwright/no-conditional-in-test': 'warn',
      'playwright/no-nested-step': 'warn',
      'playwright/no-networkidle': 'warn',
      'playwright/no-useless-await': 'error',
      'playwright/no-unsafe-references': 'warn',
      'playwright/no-useless-not': 'warn',
      'playwright/no-unused-locators': 'warn',
      'playwright/no-wait-for-navigation': 'warn',
      'playwright/no-wait-for-selector': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/prefer-web-first-assertions': 'warn',
      'playwright/valid-describe-callback': 'warn',
      'playwright/valid-expect-in-promise': 'warn',
      'playwright/valid-expect': 'warn',
      'playwright/valid-title': 'warn',
    },
  };
}

export default playwright;
