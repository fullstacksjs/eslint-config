const getUserInput = require('./getUserInput');
const args = require('./parseArgs');

const eslintrcConfig = {
  extends: ['@fullstacksjs'],
};

const requiredPackages = ['@fullstacksjs/eslint-config', 'eslint', 'prettier'];

async function createOptions() {
  const isTechnologyInArgv = args.t != null;
  const optionsFromArgs = { technology: args.t };
  const userInput = isTechnologyInArgv ? optionsFromArgs : await getUserInput();

  if (userInput.language === 'ts') {
    requiredPackages.push('typescript');
  }

  return {
    eslintrc: eslintrcConfig,
    packages: requiredPackages,
  };
}

module.exports = createOptions;
