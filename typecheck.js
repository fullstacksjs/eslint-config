/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./rules/typecheck.js'],
    },
  ],
};
