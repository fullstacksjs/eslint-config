module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['./rules/react', './rules/react-hooks', './rules/jsx-a11y'],
  rules: {},
};
