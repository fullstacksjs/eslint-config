#!/usr/bin/env node

import { ESLint } from 'eslint';
import { join } from 'node:path';

const dirname = import.meta.dirname;

const config = new ESLint();
config.lintFiles(join(dirname, './ts.ts')).then(a => console.log(a[0].usedDeprecatedRules));
config.lintFiles(join(dirname, '../eslint.config.mjs')).then(a => console.log(a[0].usedDeprecatedRules));
config.lintFiles(join(dirname, './test.spec.js')).then(a => console.log(a[0].usedDeprecatedRules));
config.lintFiles(join(dirname, './e2e/test.e2e.js')).then(a => console.log(a[0].usedDeprecatedRules));
