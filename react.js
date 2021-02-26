module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  extends: ['./rules/react', './rules/react-hooks', './rules/jsx-a11y', 'prettier'],
};
