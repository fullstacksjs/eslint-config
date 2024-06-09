const merge = require('deepmerge');
const { isPackageExists } = require('local-pkg');
const base = require('./modules/base');
const cypress = require('./modules/cypress');
const imports = require('./modules/imports');
const prettier = require('./modules/prettier');
const tailwind = require('./modules/tailwind');
// const graphql = require('./modules/graphql');
const fp = require('./modules/fp');
const node = require('./modules/node');
const tests = require('./modules/tests');
const jest = require('./modules/jest');
const vitest = require('./modules/vitest');
// const next = require('./modules/next');
const strict = require('./modules/strict');
const react = require('./modules/react');
const storybook = require('./modules/storybook');
const typescript = require('./modules/typescript');
const playwright = require('./modules/playwright');
const compose = require('./utils/compose');

const testPackages = ['jest', 'vitest', 'cypress', 'playwright'];

/** @type {import('./init').Options} */
const defaultOptions = {
  disableExpensiveRules: false,
  fp: true,
  esm: false,
  node: false,
  strict: false,
  import: {},
  test: testPackages.some(p => isPackageExists(p)),
  react: isPackageExists('react'),
  jest: isPackageExists('jest'),
  vitest: isPackageExists('vitest'),
  next: isPackageExists('next'),
  tailwind: isPackageExists('tailwindcss'),
  graphql: isPackageExists('graphql'),
  cypress: isPackageExists('cypress'),
  storybook: isPackageExists('storybook'),
  prettier: isPackageExists('prettier'),
  typescript: isPackageExists('typescript') ? { projects: true } : false,
  unocss: isPackageExists('unocss'),
  playwright: isPackageExists('playwright'),
  ignores: [],
};

/**
 * Initialize eslint config
 *
 * @param {import('./init').Options} initOptions
 * @param {...(import('eslint').Linter.FlatConfig)} extend
 * @returns {import('eslint').Linter.FlatConfig[]}
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

  // ISSUE: Waiting for FlatConfig support https://github.com/dimaMachina/graphql-eslint/issues/2178
  // if (false && options.graphql) rules.push(compose(graphql,options));
  // ISSUE: Waiting for FlatConfig support https://github.com/vercel/next/issues/64409#issuecomment-2057325722
  // if (false && options.next) rules.push(compose(next,options));

  if (options.strict) rules.push(compose(strict, options));
  if (options.prettier) rules.push(compose(prettier, options));

  return rules.concat(extend);
}

module.exports.init = init;
