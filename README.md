<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

## Installation

If you use [ESLint](https://eslint.org/) alongside [TypeScript](https://typescriptlang.org/)

### npm :

```sh
$ npm install --save-dev @fullstacksjs/eslint-config eslint prettier typescript
```

### yarn :

```sh
$ yarn add --dev @fullstacksjs/eslint-config eslint prettier typescript
```

for JavaScript development

### npm :

```sh
$ npm install --save-dev @fullstacksjs/eslint-config eslint prettier
```

### yarn :

```sh
$ yarn add --dev @fullstacksjs/eslint-config eslint prettier
```

## Usage

## Method 1 (recommended)

Create `.eslintrc.js` file and init the configuration.

```js
const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true, // If you need auto module detection.
    // Modules configuration. (optional)
  },
  // Your configurations
});

```

## Method 2
extend from `@fullstacksjs`:

```json
{
  "extends": ["@fullstacksjs"]
}
```

## Auto Module Detection
When you extend from `@fullstakcjs` or use `modules.auto: true`, it reads your root `package.json` dependencies and includes necessary rules and plugins.

## Modules API

```typescript
interface Modules {
    auto?: boolean; // Auto module detection
    react?: 'next' | 'raw'; // controls react, react-hooks, jsx/a11y plugins
    typescript?: { parserProject: string[] | string; resolverProject: string[] | string }; // controls typescript plugin
    node?: boolean; // controls node plugin
    strict?: boolean; // controls strict plugin
    import?: boolean; // controls import plugin
    esm?: boolean; // controls esm plugin
    graphql?: boolean; // controls graphql plugin
    test?: boolean; // controls jest/vitest plugin
    cypress?: boolean; // controls cypress plugin
    storybook?: boolean; // controls storybook plugin
}
```

## Typescript configuration

If you need more advanced typescript-eslint rule you need to specify `modules.typescript.resolverProject`.

```json
module.exports = init({
  modules: {
    typescript: { resolverProject: "<PATH_TO_TSCONFIG>" }
  },
});
```

## Graphql

To enable graphql module you need to set either have `graphql` dependency installed with auto module detection option, or manually enable it yourself by `modules.graphql` option. for more information checkout [here](https://github.com/B2o5T/graphql-eslint#configuration).

Here is an example:

```js
module.exports = init({
  modules: {
    graphql: true
  },
});
```

## What's included?

* @typescript-eslint/eslint-plugin
* eslint-plugin-import
* eslint-plugin-jest
* eslint-plugin-jest-formatting
* eslint-plugin-cypress
* eslint-plugin-jsx-a11y
* eslint-plugin-prettier
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-simple-import-sort
* eslint-plugin-fp
* eslint-plugin-node
* eslint-plugin-promise
* eslint-plugin-storybook
* eslint-plugin-graphql

That's all. Feel free to use 💛

[logo]: https://raw.githubusercontent.com/fullstacksjs/eslint-config/master/assets/logo.png
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
