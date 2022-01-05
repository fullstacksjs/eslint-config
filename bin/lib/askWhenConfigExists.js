const { readFile } = require('fs/promises');
const inquirer = require('inquirer');

const isObject = x => typeof x === 'object' && !Array.isArray(x) && x !== null;

// TODO: add this function to the toolbox
const merge = (obj, obj2) =>
  Object.entries(obj)
    .concat(Object.entries(obj2))
    .reduce((acc, [key, value]) => {
      const accValue = acc[key];
      return Array.isArray(accValue) && Array.isArray(value)
        ? { ...acc, [key]: accValue.concat(value) }
        : isObject(accValue) && isObject(value)
        ? { ...acc, [key]: merge(accValue, value) }
        : { ...acc, [key]: value };
    }, {});

const Choice = {
  noConfig: 'noConfig',
  overwrite: 'overwrite',
  extend: 'extend',
};

const askWhenConfigExists = async eslintrc => {
  const file = await readFile('.eslintrc.json').catch(() => null);
  if (file === null) return eslintrc;

  const currentConfig = JSON.parse(file);
  const isConfiguredBefore = eslintrc?.extends.every(c => currentConfig?.extends?.includes(c));
  if (isConfiguredBefore) return currentConfig;

  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'config found',
    choices: [
      {
        value: 'overwrite',
        name: 'overwrite the current config completely',
      },
      {
        value: 'extend',
        name: 'extend the fullstacks config alongside current config',
      },
    ],
  });
  return choice === Choice.extend ? merge(currentConfig, eslintrc) : eslintrc;
};

module.exports = askWhenConfigExists;
