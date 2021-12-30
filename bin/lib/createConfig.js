const getUserInput = require('./getUserInput');

const eslintrcConfig = {
  extends: ['@fullstacksjs'],
};

const packages = ['@fullstacksjs/eslint-config', 'eslint', 'prettier'];

const createConfig = async () => {
  const userConfig = await getUserInput();

  if (userConfig.language === 'ts') {
    packages.push('typescript');
  }

  return {
    eslintrc: eslintrcConfig,
    packages,
  };
};
module.exports = createConfig;
