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

optional dependencies (if you need):

* react
* jest
* cypress

## Usage

Just extend from `@fullstacksjs`:

```json
{
  "extends": ["@fullstacksjs"]
}
```

It reads your root `package.json` dependencies and includes necessary rules.

## NextJS

[NextJS](https://nextjs.org/) config is subset of base config which is compatible with builtin NextJS eslint config.

```json
{
  "extends": ["@fullstacksjs/eslint-config/nextjs"]
}
```

## Advanced Usage

```jsonc
{
  "extends": [
    "@fullstacksjs/eslint-config/base",
    "@fullstacksjs/eslint-config/jest",
    "@fullstacksjs/eslint-config/react",
    "@fullstacksjs/eslint-config/typescript",
    "@fullstacksjs/eslint-config/strict",
    "@fullstacksjs/eslint-config/cypress",
    "@fullstacksjs/eslint-config/esm", // for native ESM modules
    "@fullstacksjs/eslint-config/typecheck" // ⚠️ Needs configurations (not included in default config)
  ]
}
```

## Need more typescript rules?

If you need more advanced `typescript-eslint` rules, then you can extend from `"@fullstacksjs/eslint-config/typecheck"` and set `parserOptions.project` option:

```json
{
  "extends": [
    "@fullstacksjs",
    "@fullstacksjs/eslint-config/typecheck"
  ],
  "parserOptions": {
    "project": "<PATH_TO_TSCONFIG>"
  }
}
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

That's all. Feel free to use 💛

[logo]: https://raw.githubusercontent.com/fullstacksjs/eslint-config/master/assets/logo.png
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
