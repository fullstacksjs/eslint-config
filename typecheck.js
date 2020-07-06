module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./rules/typescript-requiring-type-checking.js'],
    },
  ],
};
