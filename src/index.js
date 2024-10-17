import merge from 'deepmerge';
import { isPackageExists } from 'local-pkg';

import base from './modules/base.js';
import cypress from './modules/cypress.js';
import fp from './modules/functional.js';
import imports from './modules/imports.js';
import jest from './modules/jest.js';
import next from './modules/next.js';
import node from './modules/node.js';
import perfectionist from './modules/perfectionist.js';
import playwright from './modules/playwright.js';
import prettier from './modules/prettier.js';
import react from './modules/react.js';
import storybook from './modules/storybook.js';
import tailwind from './modules/tailwind.js';
import tests from './modules/tests.js';
import typescript from './modules/typescript.js';
import vitest from './modules/vitest.js';
import { compose } from './utils/compose.js';

const testPackages = ['jest', 'vitest', 'cypress', 'playwright'];

/** @type {import('./index.js').Options} */
const defaultOptions = {
  cypress: isPackageExists('cypress'),
  disableExpensiveRules: false,
  esm: false,
  fp: true,
  ignores: [],
  import: {},
  jest: isPackageExists('jest'),
  next: isPackageExists('next'),
  node: false,
  sort: true,
  playwright: isPackageExists('playwright'),
  prettier: isPackageExists('prettier'),
  react: isPackageExists('react'),
  storybook: isPackageExists('storybook'),
  strict: false,
  tailwind: isPackageExists('tailwindcss'),
  test: testPackages.some(p => isPackageExists(p)),
  typescript: isPackageExists('typescript') ? { projects: true } : false,
  unocss: isPackageExists('unocss'),
  vitest: isPackageExists('vitest'),
};

/**
 * Initialize eslint config
 *
 * @param {import('./index.js').Options} initOptions
 * @param {...(import('eslint').Linter.Config)} extend
 * @returns {import('eslint').Linter.Config[]}
 */
function init(initOptions, ...extend) {
  const options = merge(defaultOptions, initOptions);
  if (options.typescript === true) {
    options.typescript = {};
  }
  if (options.import === true) {
    options.import = {};
  }

  const rules = [compose(base, options)];

  if (options.fp) rules.push(compose(fp, options));
  if (options.sort) rules.push(compose(perfectionist, options));
  if (options.import) rules.push(compose(imports, options));
  if (options.tailwind) rules.push(compose(tailwind, options));
  if (options.test) rules.push(compose(tests, options));
  if (options.node) rules.push(compose(node, options));
  if (options.jest) rules.push(compose(jest, options));
  if (options.vitest) rules.push(compose(vitest, options));
  if (options.cypress) rules.push(compose(cypress, options));
  if (options.react) rules.push(compose(react, options));
  if (options.storybook) rules.push(compose(storybook, options));
  if (options.typescript) rules.push(compose(typescript, options));
  if (options.playwright) rules.push(compose(playwright, options));
  if (options.next && options.next) rules.push(compose(next, options));

  if (options.prettier) rules.push(compose(prettier, options));

  return rules.concat(extend);
}

const _init = init;
export { _init as init };
