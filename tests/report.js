#!/usr/bin/env node
const path = require('path');
const eslint = require('eslint');

// Load your ESLint config
const config = new eslint.ESLint();
config.lintFiles(path.join(__dirname, '../eslint.config.js')).then(a => console.log(a[0].usedDeprecatedRules));
config.lintFiles(path.join(__dirname, './test.spec.js')).then(a => console.log(a[0].usedDeprecatedRules));
config.lintFiles(path.join(__dirname, './e2e/test.e2e.js')).then(a => console.log(a[0].usedDeprecatedRules));
