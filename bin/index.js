#!/usr/bin/env node

const createOptions = require('./lib/createOptions');
const createTasks = require('./lib/tasks');

createOptions()
  .then(createTasks)
  .then(tasks => tasks.run())
  .catch(() => {});
