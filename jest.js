const { exts } = require('./utils');

const dirs = '+(test|tests|__test__|__tests__|spec|specs)';

/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: [`**/${dirs}/**/*.${exts}`, `**/**/*.+(spec|test|e2e-spec|e2e-test).${exts}`],
      plugins: ['jest', 'jest-formatting'],
      env: {
        'jest/globals': true,
      },
      extends: ['./rules/test', './rules/jest'],
    },
  ],
};
