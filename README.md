<div align="center">

![logo](https://raw.githubusercontent.com/fullstacksjs/eslint-config/master/assets/banner.png)

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

## Installation

```sh
npm install --save-dev @fullstacksjs/eslint-config eslint prettier
```

⚡️ That's it, you don't need to install any eslint-plugin!  If you already have some plugins installed, please remove them.

## Usage

To use the configuration, all you need is to export the generated config by the `defineConfig` function. It automatically enables required plugins with **Auto Module Detection**.

### ESM

```js
import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig();
```

### CJS

```js
const { defineConfig } = require('@fullstacksjs/eslint-config');

module.exports = defineConfig();
```

## How Module Detection Works

Automatic module detection enables ESLint plugins based on the dependencies listed in your `package.json`. It scans your project to identify which tools you're using, and then activates the corresponding ESLint plugins accordingly.

For example, if your `package.json` includes `vitest` as a dependency, the configuration will automatically enable `eslint-plugin-vitest` for you. (You don't need to install the plugin itself)

### Modules API

You can fine-tune module detection by overriding it, the `defineConfig` function accepts options as its first argument to control enabled modules.

```typescript
interface Options {
  react?: boolean | { additionalEffectHooks?: string }; // controls react, react-hooks, jsx/a11y plugins
  typescript?: ParserOptions // https://typescript-eslint.io/packages/parser#configuration
  node?: boolean; // controls node plugin
  sort?: boolean; // controls perfectionist plugin
  strict?: boolean; // controls strict rules
  import?: { internalRegExp?: string; lifetime?: number; }; // controls import plugin
  esm?: boolean; // controls esm plugin
  test?: boolean; // controls test formatting plugin
  jest?: boolean; // controls jest plugin
  vitest?: boolean; // controls vitest plugin
  cypress?: boolean; // controls cypress plugin
  playwright?: boolean // controls playwright plugin
  storybook?: boolean; // controls storybook plugin
  tailwind?: false | TailwindConfig; // controls tailwindcss plugin
  next?: boolean; // controls next plugin
  prettier?: boolean; // controls prettier plugin
  disableExpensiveRules?: boolean; // controls expensive rules
  gitignore?: false | string; // automatically ignore paths from .gitignore
  regex?: boolean | {allowedCharacterRanges?: string[]} // controls regexp plugin
}
```

## What if I want to add my one rules

You can pass any number of arbitrary custom config overrides to `defineConfig` function:

```js
import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig(
  {
    typescript: true,
    // You can pass extends here
    rules: {
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

## What If I Want to Use a Plugin That Isn't Supported?

You can still use any ESLint plugin, even if it's not supported by automatic detection. Simply install the plugin manually and add it to the `defineConfig`. There are no limitations.

```js
import { defineConfig } from '@fullstacksjs/eslint-config';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig(
  { /* Options */},
  ...pluginVue.configs['flat/recommended']
)
```

## Tailwind

To enable Tailwind CSS in your project, specify the path to your CSS file in the module configuration:

Tailwind 4:
```typescript
export default defineConfig({
  tailwind: { entryPoint: './src/global.css' },
})
```

Tailwind 3:
```typescript
export default defineConfig({
  tailwind: { tailwindConfig: './tailwind.config.js' },
})
```

## GitIgnore

By default, FullstacksJS checks for a `.gitignore` file at the root of the project. If the file exists, it will be used automatically. You can override this behavior by updating the configuration.

```typescript
export default defineConfig({
  gitignore: './packages/acme/.gitignore', // use `false` to disable
})
```

## I'm Getting a Next.js Warning: Plugin Was Not Detected

This configuration includes built-in support for [Next.js](https://nextjs.org). The warning you're seeing from Next.js is misleading—it simply checks whether the plugin is explicitly listed in your package.json.

You can safely ignore this warning. Alternatively, you can update your lint script from next lint to eslint to avoid it entirely.

## Speed Optimization!

Balancing the benefits of linting rules against their performance impact is crucial. Below is a table highlighting the most resource-intensive linting rules encountered in a real-world React project:

| Rule                                   | Time (ms) | Relative |
| -------------------------------------- | --------- | -------- |
| prettier/prettier                      | 3299.631  | 19.2%    |
| @typescript-eslint/no-misused-promises | 2473.767  | 14.4%    |
| import/no-cycle                        | 1177.111  | 6.8%     |
| import/namespace                       | 1148.731  | 6.7%     |

As illustrated, certain rules significantly increase linting time, potentially hindering the developer experience by slowing down the feedback loop. To mitigate this, you may consider disabling these resource-intensive rules in the development environment. However, they can remain active in environments where performance is less critical, such as Continuous Integration (CI) systems or during pre-commit checks (git hooks).

To conditionally disable expensive linting rules, you can modify your configuration as follows:

List of `expensiveRules` to be affected:

```sh
@typescript-eslint/no-floating-promises
@typescript-eslint/no-misused-promises
import/default # (disabled in TS env)
import/export # (disabled in TS env)
import/named # (disabled in TS env)
import/no-named-as-default-member # (disabled in TS env)
import/namespace
import/no-cycle
import/no-deprecated
```

```js
export default defineConfig({
  disableExpensiveRules: !process.env.CI || !process.env.HUSKY // Or anywhere you want
  prettier: false // So you should run the formatter explicitly.
});
```

## Migration Guide

[See Migration Guide](./MIGRATION.md)

## What's included?

* [@eslint-react/eslint-plugin](https://eslint-react.xyz/)
* [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)
* [@stylistic/eslint-plugin](https://eslint.style/packages/default)
* [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
* [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
* [eslint-plugin-perfectionist](https://perfectionist.dev/)
* [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
* [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)
* [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest)
* [typescript-eslint](https://typescript-eslint.io/)
* [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)

That's all. Feel free to use 💛

[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
