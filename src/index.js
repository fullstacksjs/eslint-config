import merge from 'deepmerge';
import { isPackageExists } from 'local-pkg';

import base from './modules/base.js';
import cypress from './modules/cypress.js';
import fp from './modules/functional.js';
import ignores from './modules/ignore.js';
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

const testPackages = ['jest', 'vitest', 'cypress', 'playwright'];

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('./option.d.ts').Options} Options
 * /

/** @type {Options} */
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
  vitest: isPackageExists('vitest'),
};

/**
 * Initialize eslint config
 * @param {Options} initOptions
 * @param {...Config} extend
 * @returns {Config[]}
 */
export function init(initOptions = {}, ...extend) {
  const options = merge(defaultOptions, initOptions);
  if (options.typescript === true) {
    options.typescript = {};
  }
  if (options.import === true) {
    options.import = {};
  }

  const {
    sort: enableSort,
    cypress: enableCypress,
    disableExpensiveRules,
    esm: enableEsm,
    fp: enableFp,
    ignores: enableIgnores,
    import: enableImport,
    jest: enableJest,
    next: enableNext,
    node: enableNode,
    playwright: enablePlaywright,
    prettier: enablePrettier,
    react: enableReact,
    storybook: enableStorybook,
    strict: enableStrict,
    tailwind: enableTailwind,
    test: enableTest,
    typescript: enableTypescript,
    vitest: enableVitest,
    ...eslintOptions
  } = options;

  const rules = [ignores(options), base(options)];

  if (enableFp) rules.push(fp(options));
  if (enableSort) rules.push(perfectionist(options));
  if (enableImport) rules.push(imports(options));
  if (enableTailwind) rules.push(tailwind(options));
  if (enableTest) rules.push(tests(options));
  if (enableNode) rules.push(node(options));
  if (enableJest) rules.push(jest(options));
  if (enableVitest) rules.push(vitest(options));
  if (enableCypress) rules.push(cypress(options));
  if (enableReact) rules.push(react(options));
  if (enableStorybook) rules.push(storybook(options));
  if (enableTypescript) rules.push(typescript(options));
  if (enablePlaywright) rules.push(playwright(options));
  if (enableNext && enableNext) rules.push(next(options));
  if (enablePrettier) rules.push(prettier(options));

  if (Object.keys(eslintOptions).length > 0) rules.push(eslintOptions);
  if (extend) Array.prototype.push.apply(rules, extend);

  return rules;
}
