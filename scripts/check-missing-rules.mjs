#!/usr/bin/env node
/* eslint-disable no-console, no-await-in-loop */

/**
 * Script to check for plugin rules that are not configured in module files
 * Usage: node scripts/check-missing-rules.mjs [module-name]
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function title(text) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(text);
  console.log('='.repeat(60));
}

const dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(dirname, '..');
const MODULES_DIR = path.join(ROOT_DIR, 'src', 'modules');

// Plugin configurations with their import paths and prefix mappings
const PLUGIN_CONFIGS = {
  'tailwind.mjs': {
    packageName: 'eslint-plugin-better-tailwindcss',
    rulePrefix: 'better-tailwindcss',
    accessor: plugin => plugin.default?.rules || plugin.rules,
  },
  'perfectionist.mjs': {
    packageName: 'eslint-plugin-perfectionist',
    rulePrefix: 'perfectionist',
    accessor: plugin => plugin.default?.rules || plugin.rules,
  },
  'playwright.mjs': {
    packageName: 'eslint-plugin-playwright',
    rulePrefix: 'playwright',
    accessor: plugin => plugin.default?.rules || plugin.rules,
  },
  'promise.mjs': {
    packageName: 'eslint-plugin-promise',
    rulePrefix: 'promise',
    accessor: plugin => plugin.default?.rules || plugin.rules,
  },
  'regex.mjs': {
    packageName: 'eslint-plugin-regexp',
    rulePrefix: 'regexp',
    accessor: plugin => plugin.rules,
  },
  'storybook.mjs': {
    packageName: 'eslint-plugin-storybook',
    rulePrefix: 'storybook',
    accessor: plugin => plugin.default?.rules || plugin.rules,
  },
  'react.mjs': {
    packageName: '@eslint-react/eslint-plugin',
    rulePrefix: '@eslint-react',
    accessor: plugin => plugin.default?.rules || plugin.rules,
    additionalPlugins: [
      {
        packageName: 'eslint-plugin-react-hooks',
        rulePrefix: 'react-hooks',
        accessor: plugin => plugin.default?.rules || plugin.rules,
      },
      {
        packageName: 'eslint-plugin-jsx-a11y',
        rulePrefix: 'jsx-a11y',
        accessor: plugin => plugin.default?.rules || plugin.rules,
      },
    ],
  },
};

/**
 * Extract configured rules from module file content
 */
function extractConfiguredRules(content, rulePrefix) {
  const rules = new Set();
  const ruleRegex = new RegExp(`['"]${rulePrefix.replace('/', '\\/')}\\/([-\\w]+)['"]\\s*:`, 'g');
  let match;

  while ((match = ruleRegex.exec(content)) !== null) {
    rules.add(match[1]);
  }

  return rules;
}

async function getPluginRules(packageName, accessor) {
  try {
    const plugin = await import(packageName);
    const rules = accessor(plugin);

    if (!rules) {
      console.warn(`⚠️  Could not find rules in ${packageName}`);
      return { all: new Set(), deprecated: new Set() };
    }

    const allRules = new Set(Object.keys(rules));
    const deprecatedRules = new Set();

    for (const [ruleName, ruleModule] of Object.entries(rules)) {
      if (ruleModule?.meta?.deprecated === true) {
        deprecatedRules.add(ruleName);
      }
    }

    return { all: allRules, deprecated: deprecatedRules };
  } catch (error) {
    console.error(`❌ Error loading ${packageName}:`, error.message);
    return { all: new Set(), deprecated: new Set() };
  }
}

/**
 * Check a single module for missing rules
 */
async function checkModule(moduleName) {
  const config = PLUGIN_CONFIGS[moduleName];

  if (!config) {
    console.error(`❌ Unknown module: ${moduleName}`);
    return;
  }

  title(`📋 Checking ${moduleName}`);

  const filePath = path.join(MODULES_DIR, moduleName);
  const content = await readFile(filePath, 'utf-8');

  await checkPluginInModule(config, content);

  if (config.additionalPlugins) {
    for (const additionalConfig of config.additionalPlugins) {
      await checkPluginInModule(additionalConfig, content);
    }
  }
}

async function checkPluginInModule(config, content) {
  const { packageName, rulePrefix, accessor } = config;

  console.log(`\n📦 Package: ${packageName}`);
  console.log(`🏷️  Prefix: ${rulePrefix}`);

  const configuredRules = extractConfiguredRules(content, rulePrefix);
  console.log(`✅ Configured rules: ${configuredRules.size}`);

  const { all: pluginRules, deprecated: deprecatedRules } = await getPluginRules(packageName, accessor);
  console.log(`🔌 Available plugin rules: ${pluginRules.size}`);

  if (deprecatedRules.size > 0) {
    console.log(`🗑️  Deprecated rules: ${deprecatedRules.size}`);
  }

  const missingRules = [...pluginRules].filter(rule => !configuredRules.has(rule) && !deprecatedRules.has(rule));
  const missingDeprecatedRules = [...pluginRules].filter(rule => !configuredRules.has(rule) && deprecatedRules.has(rule));
  const extraRules = [...configuredRules].filter(rule => !pluginRules.has(rule));
  const configuredDeprecatedRules = [...configuredRules].filter(rule => deprecatedRules.has(rule));

  if (missingRules.length === 0 && extraRules.length === 0 && configuredDeprecatedRules.length === 0) {
    console.log('✨ All rules are in sync!');
  } else {
    if (missingRules.length > 0) {
      console.log(`\n⚠️  Missing rules (${missingRules.length}):`);
      missingRules.sort().forEach(rule => {
        console.log(`   - ${rulePrefix}/${rule}`);
      });
    }

    if (missingDeprecatedRules.length > 0) {
      console.log(`\n🗑️  Missing deprecated rules (${missingDeprecatedRules.length}) - skipped:`);
      missingDeprecatedRules.sort().forEach(rule => {
        console.log(`   - ${rulePrefix}/${rule}`);
      });
    }

    if (configuredDeprecatedRules.length > 0) {
      console.log(`\n⚠️  Configured deprecated rules (${configuredDeprecatedRules.length}):`);
      console.log('   (Consider removing these rules)');
      configuredDeprecatedRules.sort().forEach(rule => {
        console.log(`   - ${rulePrefix}/${rule}`);
      });
    }

    if (extraRules.length > 0) {
      console.log(`\n⚠️  Extra rules in config (${extraRules.length}):`);
      console.log('   (These rules might be removed from the plugin)');
      extraRules.sort().forEach(rule => {
        console.log(`   - ${rulePrefix}/${rule}`);
      });
    }
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
  } else {
    const files = await readdir(MODULES_DIR);
    const moduleFiles = files.filter(file => file.endsWith('.mjs') && PLUGIN_CONFIGS[file]);

    for (const moduleName of moduleFiles.sort()) {
      await checkModule(moduleName);
    }
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
