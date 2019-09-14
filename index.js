module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    // confilict with prettier
    // "arrow-parens": [1, "as-needed", { "requireForBlockBody": true }],
    // "object-curly-newline": [1, { "ImportDeclaration": { "multiline": true }, "ObjectPattern": { "multiline": true } }],

    "consistent-return": 0,
    "func-names": 0,
    "global-require": 0,
    "max-len": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],
    "no-unused-vars": [1, { "args": "none" }],
    "no-use-before-define": [2, { "functions": false, "classes": false }],
    "no-var": 0,
    "prefer-const": 0,
    "prefer-destructuring": [1, { "array": false, "object": true }],

    "import/extensions": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "import/prefer-default-export": 0,

    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/label-has-for": 0,

    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": [1, { "ignore": ["children", "className"] }],
    "react/sort-comp": 0,

    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,

    "prettier/prettier": 2
  },
  "overrides": [
    {
      "files": [
        "*.test.js",
        "*jest*.js"
      ],
      "env": {
        "jest": true
      }
    },
  ],
};
