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

### Method 1: Init API

Create `.eslintrc.js` file and init the configuration.

```js
const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true, // If you need auto module detection (refer to Auto Module Detection).
    // Modules configuration check (optional). (refer to Module API)
  },
  // Other ESLint configurations
});

```

### Method 2: Extends API

You can also use the configuration within a `json` or `yaml` files by extending from `@fullstacksjs`, the Auto Module Detection is enabled on this method

```json
{
  "extends": ["@fullstacksjs"]
}
```

## Auto Module Detection

When auto module detection is turned on, the configuration reads the metadata from your root "package.json" file and automatically adds the rules and plugins that are needed. It's enabled for the `extends` API, and you should set `modules.auto` to `true` when you use the `init` API.

## Modules API

```typescript
interface Modules {
    auto?: boolean; // Auto module detection
    react?: boolean; // controls react, react-hooks, jsx/a11y plugins
    typescript?: { // controls typescript plugin
      parserProject?: string[] | string; // controls parserOptions.project
      resolverProject?: string[] | string // controls settings['import/resolver'].typescript.project
    };
    node?: boolean; // controls node plugin
    strict?: boolean; // controls strict plugin
    import?: boolean; // controls import plugin
    esm?: boolean; // controls esm plugin
    graphql?: boolean; // controls graphql plugin
    test?: boolean; // controls jest/vitest plugin
    cypress?: boolean; // controls cypress plugin
    storybook?: boolean; // controls storybook plugin
    tailwind?: boolean; // controls tailwindcss plugin
    next?: boolean; // controls next plugin
    prettier?: boolean; // controls prettier plugin
    disableExpensiveRules?: boolean; // controls expensive rules
}
```

## Typescript configuration

If you need more advanced typescript-eslint rule you need to specify `modules.typescript.resolverProject`.

```js
module.exports = init({
  modules: {
    typescript: {
      parserProject: "<PATH_TO_TSCONFIG>", // parserOptions.project
      resolverProject: "<PATH_TO_TSCONFIG>", // settings['import/resolver']
    },
  },
});
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

list of expensiveRules to be effected:

```
@typescript-eslint/no-misused-promises
import/no-cycle
import/named *
import/namespace *
import/default *
import/no-named-as-default-member *
```

> *: If you are using Typescript these rules are not needed and disabled by default.

```js
module.exports = init({
  modules: {
    disableExpensiveRules: !process.env.CI || !process.env.HUSKY // Or anywhere you want
    prettier: false // So you should run the formatter explicitly.
  },
});
```

This approach ensures a smoother development experience while still enforcing rigorous code quality checks in environments where performance is less of a concern.

## React/NextJS configuration

React/NextJS configuration should automatically work with Auto Module Detection, but if you need to have more control over the rules you can configure it through `modules.react`.

```js
module.exports = init({
  modules: {
    react: true // for React/CRA/Vite
  },
});
```

and

```js
module.exports = init({
  modules: {
    react: true,
    next: true // for NextJS
  },
});
```

## Migration Guid

### to v9

v9 does not have any breaking change, which means the current configuration you have should work without any problem, but in order to migrate to new Module API:

1. Move your configs to `.eslintrc.js` file.
2. Use init API.
    ```diff
    -module.exports = {
    -  extends: [
    -    "@fullstacksjs",
    -    "@fullstacksjs/eslint-config/esm",
    -    "@fullstacksjs/eslint-config/typecheck",
    -    "@fullstacksjs/eslint-config/graphql"
    -  ],
    -  "parserOptions": {
    -    "project": ["./tsconfig.eslint.json"]
    -  },
    -  "settings": {
    -    "import/resolver": {
    -      "typescript": {
    -        "project": ["./tsconfig.json"]
    -      },
    -    },
    -  },
    -  // your configuration
    -};
    +const { init } = require('@fullstacksjs/eslint-config/init');
    +
    +module.exports = init({
    +  modules: {
    +    auto: true,
    +    esm: true,
    +    graphql: true,
    +    typescript: {
    +      parserProject: ['./tsconfig.eslint.json'],
    +      resolverProject: ['./tsconfig.json'],
    +    },
    +  },
    +  // your configuration
    +});
    ```

## What's included?

* [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
* [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
* [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)
* [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
* [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql)
* [eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)
* [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)

That's all. Feel free to use 💛

[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
