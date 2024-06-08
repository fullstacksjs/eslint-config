const merge = require('deepmerge');
const { isPackageExists } = require('local-pkg');
const base = require('./modules/base');
const cypress = require('./modules/cypress');
const ignores = require('./modules/ignores');
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

  const rules = [ignores(), base()];

  if (options.fp) rules.push(fp(options));
  if (options.import) rules.push(imports(options));
  if (options.tailwind) rules.push(tailwind(options));
  if (options.test) rules.push(tests(options));
  if (options.node) rules.push(node(options));
  if (options.jest) rules.push(jest(options));
  if (options.vitest) rules.push(vitest(options));
  if (options.cypress) rules.push(cypress(options));
  if (options.react) rules.push(react(options));
  if (options.storybook) rules.push(storybook(options));
  if (options.typescript) rules.push(typescript(options));

  // ISSUE: Waiting for FlatConfig support https://github.com/dimaMachina/graphql-eslint/issues/2178
  // if (false && options.graphql) rules.push(graphql(options));
  // ISSUE: Waiting for FlatConfig support https://github.com/vercel/next/issues/64409#issuecomment-2057325722
  // if (false && options.next) rules.push(next(options));

  if (options.strict) rules.push(strict(options));
  if (options.prettier) rules.push(prettier(options));

  return rules.concat(extend);
}

module.exports.init = init;
