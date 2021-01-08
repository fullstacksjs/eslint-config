<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

## Installation

```sh
npm install --save-dev @fullstacksjs/eslint-config
```

required peer-dependencies:
* eslint
* prettier
* typescript || @babel/core

optional dependencies (if you need):
* react
* jest

## Usage

Just extend from `@fullstacksjs`:

```json
{
  "extends": ["@fullstacksjs"]
}
```

It reads your root `package.json` dependencies and includes necessary rules.

## Advanced Usage

```jsonc
{
  "extends": [
    "@fullstacksjs/eslint-config/base",
    "@fullstacksjs/eslint-config/jest",
    "@fullstacksjs/eslint-config/react",
    "@fullstacksjs/eslint-config/typescript",
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

* @babel/eslint-plugin
* @typescript-eslint/eslint-plugin
* eslint-plugin-babel
* eslint-plugin-import
* eslint-plugin-jest
* slint-plugin-jsx-a11y
* eslint-plugin-prettier
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-simple-import-sort

That's all. Feel free to use 💛

[logo]: assets/logo.png
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/eslint-config?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/eslint-config?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/eslint-config?color=6464E2&label=LICENSE&style=flat-square
