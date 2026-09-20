#!/usr/bin/env node
/* eslint-disable no-console, no-await-in-loop */

/**
 * Script to check for plugin rules that are not configured in module files
 * Exits with code 1 when any module is out of sync
 * Usage: node scripts/check-missing-rules.mjs [module-name]
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(dirname, '..');
const MODULES_DIR = path.join(ROOT_DIR, 'src', 'modules');

const defaultAccessor = plugin => plugin.default?.rules || plugin.rules;

// Plugin configurations with their import paths and prefix mappings
// One module can check many plugins: extra ones go into `additionalPlugins`
const PLUGIN_CONFIGS = {
  'base.mjs': {
    packageName: 'eslint/use-at-your-own-risk',
    rulePrefix: '', // ESLint core rules have no prefix
    accessor: plugin => Object.fromEntries(plugin.builtinRules),
  },
  'cypress.mjs': {
    packageName: 'eslint-plugin-cypress',
    rulePrefix: 'cypress',
    accessor: defaultAccessor,
  },
  'imports.mjs': {
    packageName: 'eslint-plugin-import-x',
    rulePrefix: 'import',
    accessor: defaultAccessor,
  },
  'jest.mjs': {
    packageName: 'eslint-plugin-jest',
    rulePrefix: 'jest',
    accessor: defaultAccessor,
  },
  'next.mjs': {
    packageName: '@next/eslint-plugin-next',
    rulePrefix: 'next',
    accessor: defaultAccessor,
  },
  'node.mjs': {
    packageName: 'eslint-plugin-n',
    rulePrefix: 'n',
    accessor: defaultAccessor,
  },
  'perfectionist.mjs': {
    packageName: 'eslint-plugin-perfectionist',
    rulePrefix: 'perfectionist',
    accessor: defaultAccessor,
  },
  'playwright.mjs': {
    packageName: 'eslint-plugin-playwright',
    rulePrefix: 'playwright',
    accessor: defaultAccessor,
  },
  'promise.mjs': {
    packageName: 'eslint-plugin-promise',
    rulePrefix: 'promise',
    accessor: defaultAccessor,
  },
  'react.mjs': {
    packageName: '@eslint-react/eslint-plugin',
    rulePrefix: '@eslint-react',
    accessor: defaultAccessor,
    // plugin exports `x-*` names, config uses them without the `x-` prefix
    normalizeRuleName: name => name.replace(/^x-/, ''),
    additionalPlugins: [
      {
        packageName: 'eslint-plugin-jsx-a11y-x',
        rulePrefix: 'jsx-a11y',
        accessor: defaultAccessor,
      },
    ],
  },
  'regex.mjs': {
    packageName: 'eslint-plugin-regexp',
    rulePrefix: 'regexp',
    accessor: plugin => plugin.rules,
  },
  'storybook.mjs': {
    packageName: 'eslint-plugin-storybook',
    rulePrefix: 'storybook',
    accessor: defaultAccessor,
  },
  'tailwind.mjs': {
    packageName: 'eslint-plugin-better-tailwindcss',
    rulePrefix: 'better-tailwindcss',
    accessor: defaultAccessor,
  },
  'typescript.mjs': {
    packageName: 'typescript-eslint',
    rulePrefix: '@typescript-eslint',
    accessor: plugin => plugin.plugin.rules,
  },
  'vitest.mjs': {
    packageName: '@vitest/eslint-plugin',
    rulePrefix: 'vitest',
    accessor: defaultAccessor,
  },
};

const identity = name => name;

// #region Reading configured rules

const formatRule = (rulePrefix, rule) => (rulePrefix ? `${rulePrefix}/${rule}` : rule);

/**
 * Extract rule names configured under `rulePrefix` from a module file.
 * Rule names can contain a slash, e.g. `n/prefer-global/buffer`.
 * Core rules have no prefix: only keys at the start of a line count, so option keys are ignored.
 */
function extractConfiguredRules(content, rulePrefix) {
  const ruleRegex = rulePrefix ? new RegExp(`['"]${rulePrefix}/([-\\w/]+)['"]\\s*:`, 'g') : /^\s*["']([\w-]+)["']\s*:/gm;

  return new Set(Array.from(content.matchAll(ruleRegex), match => match[1]));
}

// #endregion

// #region Reading plugin rules

/**
 * ESLint marks deprecated rules with `meta.deprecated` (boolean or object) or `meta.replacedBy`.
 */
function isRuleDeprecated(ruleModule) {
  const { deprecated, replacedBy } = ruleModule?.meta ?? {};

  return Boolean(deprecated) || (Array.isArray(replacedBy) && replacedBy.length > 0);
}

/**
 * Some plugins (e.g. @eslint-react) do not deprecate the rule itself,
 * they only report the usage of a deprecated API with a `[Deprecated]` message.
 */
function reportsDeprecatedApi(ruleModule) {
  const messages = Object.values(ruleModule?.meta?.messages ?? {});

  return messages.some(message => typeof message === 'string' && message.startsWith('[Deprecated]'));
}

function emptyPluginRules() {
  return { all: new Set(), deprecated: new Set(), deprecatedApi: new Set() };
}

async function loadPluginRules({ packageName, accessor, normalizeRuleName = identity }) {
  try {
    const rules = accessor(await import(packageName));

    if (!rules) {
      console.warn(`⚠️  Could not find rules in ${packageName}`);
      return emptyPluginRules();
    }

    const pluginRules = emptyPluginRules();

    for (const [name, ruleModule] of Object.entries(rules)) {
      const ruleName = normalizeRuleName(name);

      pluginRules.all.add(ruleName);

      if (isRuleDeprecated(ruleModule)) {
        pluginRules.deprecated.add(ruleName);
      } else if (reportsDeprecatedApi(ruleModule)) {
        pluginRules.deprecatedApi.add(ruleName);
      }
    }

    return pluginRules;
  } catch (error) {
    console.error(`❌ Error loading ${packageName}:`, error.message);
    return emptyPluginRules();
  }
}

// #endregion

// #region Comparing

/**
 * Compare configured rules with plugin rules. Every list is sorted.
 * Rules that flag deprecated APIs are treated like deprecated rules when they are not configured.
 */
function compareRules(configuredRules, pluginRules) {
  const { all, deprecated, deprecatedApi } = pluginRules;
  const isConfigured = rule => configuredRules.has(rule);
  const isSkipped = rule => deprecated.has(rule) || deprecatedApi.has(rule);
  const sorted = rules => [...rules].sort();

  return {
    missing: sorted([...all].filter(rule => !isConfigured(rule) && !isSkipped(rule))),
    missingDeprecated: sorted([...all].filter(rule => !isConfigured(rule) && isSkipped(rule))),
    extra: sorted([...configuredRules].filter(rule => !all.has(rule))),
    configuredDeprecated: sorted([...configuredRules].filter(rule => deprecated.has(rule))),
    configuredDeprecatedApi: sorted([...configuredRules].filter(rule => deprecatedApi.has(rule))),
  };
}

// #endregion

// #region Reporting

function printTitle(text) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(text);
  console.log('='.repeat(60));
}

/**
 * List only the deprecated rules that the module uses. Deprecated rules that are not used are not interesting.
 */
function printDeprecatedRules(rulePrefix, configuredRules, { deprecated, deprecatedApi }) {
  const printGroup = (heading, rules) => {
    const usedRules = [...rules].filter(rule => configuredRules.has(rule)).sort();

    if (usedRules.length === 0) return;

    console.log(`\n🗑️  ${heading} (${usedRules.length}):`);

    for (const rule of usedRules) {
      console.log(`   - ${formatRule(rulePrefix, rule)}`);
    }
  };

  printGroup('Deprecated rules in use, consider removing', deprecated);
  printGroup('Rules in use that report deprecated APIs', deprecatedApi);
}

function printRules(rulePrefix, { heading, rules, hint }) {
  if (rules.length === 0) return;

  console.log(`\n${heading} (${rules.length}):`);

  if (hint) console.log(`   (${hint})`);

  for (const rule of rules) {
    console.log(`   - ${formatRule(rulePrefix, rule)}`);
  }
}

async function checkPlugin(config, moduleContent) {
  const { packageName, rulePrefix } = config;

  console.log(`\n📦 Package: ${packageName}`);
  console.log(`🏷️  Prefix: ${rulePrefix || '(none, ESLint core rules)'}`);

  const configuredRules = extractConfiguredRules(moduleContent, rulePrefix);
  const pluginRules = await loadPluginRules(config);

  console.log(`✅ Configured rules: ${configuredRules.size}`);
  console.log(`🔌 Available plugin rules: ${pluginRules.all.size}`);

  const result = compareRules(configuredRules, pluginRules);

  printDeprecatedRules(rulePrefix, configuredRules, pluginRules);

  if (result.missing.length === 0 && result.extra.length === 0 && result.configuredDeprecated.length === 0) {
    console.log('✨ All rules are in sync!');
    return;
  }

  // Fail hooks and CI when rules are out of sync
  process.exitCode = 1;

  printRules(rulePrefix, { heading: '⚠️  Missing rules', rules: result.missing });
  printRules(rulePrefix, {
    heading: '⚠️  Extra rules in config',
    rules: result.extra,
    hint: 'These rules might be removed from the plugin',
  });
}

// #endregion

/**
 * Check a single module, including its additional plugins
 */
async function checkModule(moduleName) {
  const config = PLUGIN_CONFIGS[moduleName];

  if (!config) {
    console.error(`❌ Unknown module: ${moduleName}`);
    return;
  }

  printTitle(`📋 Checking ${moduleName}`);

  const moduleContent = await readFile(path.join(MODULES_DIR, moduleName), 'utf-8');

  for (const pluginConfig of [config, ...(config.additionalPlugins ?? [])]) {
    await checkPlugin(pluginConfig, moduleContent);
  }
}

async function main() {
  const targetModule = process.argv[2];

  if (targetModule) {
    if (!targetModule.endsWith('.mjs')) {
      console.error('❌ Module name must end with .mjs');
      process.exit(1);
    }

    await checkModule(targetModule);
    return;
  }

  const files = await readdir(MODULES_DIR);
  const moduleNames = files.filter(file => PLUGIN_CONFIGS[file]).sort();

  for (const moduleName of moduleNames) {
    await checkModule(moduleName);
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
