import merge from 'deepmerge';
import { defineConfig as eslintConfig } from 'eslint/config';
import { isPackageExists } from 'local-pkg';

import base from './modules/base.mjs';
import cypress from './modules/cypress.mjs';
import ignores from './modules/ignore.mjs';
import imports from './modules/imports.mjs';
import jest from './modules/jest.mjs';
import next from './modules/next.mjs';
import node from './modules/node.mjs';
import perfectionist from './modules/perfectionist.mjs';
import playwright from './modules/playwright.mjs';
import prettier from './modules/prettier.mjs';
import react from './modules/react.mjs';
import regex from './modules/regex.mjs';
import storybook from './modules/storybook.mjs';
import stylistic from './modules/stylistic.mjs';
import tailwind from './modules/tailwind.mjs';
import tests from './modules/tests.mjs';
import typescript from './modules/typescript.mjs';
import vitest from './modules/vitest.mjs';

const testPackages = ['jest', 'vitest', 'cypress', 'playwright'];

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('.').Options} Options
 * /

/** @type {Options} */
const defaultOptions = {
  cypress: isPackageExists('cypress'),
  disableExpensiveRules: false,
  esm: false,
  ignores: [],
  gitignore: './.gitignore',
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
  tailwind: false,
  test: testPackages.some(p => isPackageExists(p)),
  typescript: isPackageExists('typescript') ? { projectService: true } : false,
  vitest: isPackageExists('vitest'),
  regex: { allowedCharacterRanges: ['all'] },
};

/**
 * Initialize eslint config
 * @param {Options} initOptions
 * @param {...Config} extend
 * @returns {Config[]}
 */
export function defineConfig(initOptions = {}, ...extend) {
  const options = merge(defaultOptions, initOptions);

  if (options.import === true) {
    options.import = {};
  }

  if (options.regex === true) {
    options.regex = { allowedCharacterRanges: ['all'] };
  }

  const {
    sort: enableSort,
    cypress: enableCypress,
    disableExpensiveRules,
    esm: enableEsm,
    ignores: enableIgnores,
    gitignore,
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
    regex: enableRegex,
    ...eslintOptions
  } = options;

  const rules = [ignores(options), base(options), stylistic(options)];

  if (enableSort) rules.push(perfectionist(options));
  if (enableImport) rules.push(imports(options));
  if (enableTailwind) rules.push(tailwind(options));
  if (enableNode) rules.push(node(options));
  if (enableReact) rules.push(react(options));
  if (enableStorybook) rules.push(storybook(options));
  if (enableTypescript) rules.push(typescript(options));
  if (enableNext) rules.push(next(options));
  if (enablePrettier) rules.push(prettier(options));
  if (enableJest) rules.push(jest(options));
  if (enableVitest) rules.push(vitest(options));
  if (enableTest) rules.push(tests(options));
  if (enableCypress) rules.push(cypress(options));
  if (enablePlaywright) rules.push(playwright(options));
  if (enableRegex) rules.push(regex(options));

  if (Object.keys(eslintOptions).length > 0) rules.push(eslintOptions);
  if (extend) Array.prototype.push.apply(rules, extend);

  return eslintConfig(rules);
}
