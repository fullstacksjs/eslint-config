<div align="center">

![logo](https://raw.githubusercontent.com/fullstacksjs/eslint-config/master/assets/banner.png)

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

## Installation

```sh
$ npm install --save-dev @fullstacksjs/eslint-config eslint prettier
```

## Usage

To use the configuration, all you need is exporting the generated config by `init` function. The configuration reads the metadata from your root `package.json` file and automatically adds the rules and plugins that are needed.

### ESM

```js
import { init } from '@fullstacksjs/eslint-config';

export default init();
```

### CJS

```js
const { init } = require('@fullstacksjs/eslint-config');

module.exports = init();
```

## Modules API

You can fine tune module detection by overriding it, `init` function accepts options as its first argument to control enabled modules.

```typescript
interface Options {
    react?: boolean; // controls react, react-hooks, jsx/a11y plugins
    typescript?: { // controls typescript plugin
      project?: boolean | string[] | string; // https://typescript-eslint.io/packages/parser/#project
      tsconfigRootDir?: string // https://typescript-eslint.io/packages/parser/#tsconfigrootdir
    };
    node?: boolean; // controls node plugin
    sort?: boolean; // controls perfectionist plugin
    strict?: boolean; // controls strict rules
    import?: {
      projects?: string[] | string // controls settings['import/resolver'].typescript.project
      internalRegExp?: string;
      lifetime?: number;
    }; // controls import plugin
    esm?: boolean; // controls esm plugin
    test?: boolean; // controls test formatting plugin
    jest?: boolean; // controls jest plugin
    vitest?: boolean; // controls vitest plugin
    cypress?: boolean; // controls cypress plugin
    playwright?: boolean // controls playwright plugin
    storybook?: boolean; // controls storybook plugin
    tailwind?: boolean; // controls tailwindcss plugin
    next?: boolean; // controls next plugin
    prettier?: boolean; // controls prettier plugin
    disableExpensiveRules?: boolean; // controls expensive rules
}
```

## Extra configuration

You can pass any number of arbitrary custom config overrides to `init` function:

```js
import { init } from '@fullstacksjs/eslint-config';

export default init(
  {
    typescript: true,
    // You can pass extends here
    rules {
      'no-console': 'error'
    }
  },
  // And any number of extra configurations
  {
    files: ['**/*.ts'],
    rules: {},
  }, {
    rules: {},
  })
```

## Speed Optimization!

It's crucial to balance the benefits of linting rules against their performance impact. Below is a table highlighting the most resource-intensive linting rules encountered in a real-world React project:

| Rule                                   | Time (ms) | Relative |
| -------------------------------------- | --------- | -------- |
| prettier/prettier                      | 3299.631  | 19.2%    |
| @typescript-eslint/no-misused-promises | 2473.767  | 14.4%    |
| import/no-cycle                        | 1177.111  | 6.8%     |
| import/namespace                       | 1148.731  | 6.7%     |

As illustrated, certain rules significantly increase linting time, potentially hindering the developer experience by slowing down the feedback loop. To mitigate this, you may consider disabling these resource-intensive rules in the development environment. However, they can remain active in environments where performance is less critical, such as Continuous Integration (CI) systems or during pre-commit checks (git hooks).

To conditionally disable expensive linting rules, you can modify your configuration as follows:

List of expensiveRules to be effected:

```
@typescript-eslint/no-floating-promises
@typescript-eslint/no-misused-promises
import/default
import/export
import/named
import/namespace
import/no-cycle
import/no-deprecated
import/no-named-as-default-member
```

```js
export default init({
  disableExpensiveRules: !process.env.CI || !process.env.HUSKY // Or anywhere you want
  prettier: false // So you should run the formatter explicitly.
});
```

This approach ensures a smoother development experience while still enforcing rigorous code quality checks in environments where performance is less of a concern.

## Migration Guide

### To v11

v10 drops support for ESLint v8 configuration and only ESLint v9 is supported, which means you should migrate to [ESlint Flat Config](https://eslint.org/docs/latest/extend/plugin-migration-flat-config):

1. Move your configs to `eslint.config.js` file.
2. Use init API.
    ```diff
    -const { init } = require('@fullstacksjs/eslint-config/init');
    +import { init } from '@fullstacksjs/eslint-config/init'

    -module.exports = init({
    -  modules: {
    -    auto: true,
    -    esm: true,
    -    typescript: {
    -      parserProject: ['./tsconfig.eslint.json'],
    -      resolverProject: ['./tsconfig.json'],
    -    },
    -  },
    -  // your configuration
    -});
    +export default init({
    +    esm: true,
    +    typescript: true,
    +  },
    +  // your configuration
    +);
    ```

## What's included?

* [@eslint-react/eslint-plugin](https://eslint-react.xyz/)
* [@next/eslint-config-next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)
* [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
* [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-perfectionist](https://perfectionist.dev/)
* [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
* [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-perfectionist](https://perfectionist.dev/)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
* [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
* [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest)
* [typescript-eslint](https://typescript-eslint.io/)

That's all. Feel free to use 💛

[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
