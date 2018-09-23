module.exports = {
  extends: ['airbnb'],
  rules: {
    "arrow-parens": [1, "as-needed", { "requireForBlockBody": true }],
    "consistent-return": 0,
    "func-names": 0,
    "global-require": 0,
    "max-len": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [1, { "args": "none" }],
    "no-use-before-define": [2, { "functions": false, "classes": false }],
    "no-var": 0,
    "prefer-const": 0,
    "object-curly-newline": [1, {"ImportDeclaration": {"multiline": true }, "ObjectPattern": { "multiline": true }}],

    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],

    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/label-has-for": 0,

    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/sort-comp": 0
  },
  "overrides": [
    {
      "files": [
        "*.test.js"
      ],
      "env": {
        "jest": true
      }
    },
  ],
};
