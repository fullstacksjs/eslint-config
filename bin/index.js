#!/usr/bin/env node
const createConfig = require('./lib/createConfig');
const runTasks = require('./lib/tasks');

(async () => {
  const { eslintrc, packages } = await createConfig();
  runTasks(packages, eslintrc);
})();
