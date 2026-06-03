import type { Linter } from 'eslint';
import type { ConfigWithExtends } from 'eslint-flat-config-utils';

import type { ImportOptions } from './modules/import';
import type { ReactOptions } from './modules/react';
import type { RegexOptions } from './modules/regex';
import type { TailwindOptions } from './modules/tailwind';
import type { TypeScriptOptions } from './modules/typescript';

interface ConfigWithOverrides {
  /**
   * Override the configuration.
   *
   * The properties of this object are merged with and take precedence over the default configuration.
   *
   * There is no guarantee that the resulting configuration works correctly — it depends on the options you provide.
   *
   * @see [eslint-flat-config-utils: `mergeConfigs`](https://jsr.io/@antfu/eslint-flat-config-utils/doc/~/mergeConfigs)
   */
  overrides?: ConfigWithExtends;
}

export interface Options extends Linter.Config {
  /**
   * Controls Base.
   * @default true
   */
  base?: boolean | ConfigWithOverrides;
  /**
   * Controls React plugin.
   * @default true - If you have `react` or `react-dom` in your dependencies.
   */
  react?: boolean | ReactOptions;
  /**
   * Controls [Perfectionist plugin](https://www.npmjs.com/package/eslint-plugin-perfectionist).
   * @default true
   */
  sort?: boolean | ConfigWithOverrides;
  /**
   * Controls Next plugin.
   * @default true - If you have `next` in your dependencies.
   */
  next?: boolean | ConfigWithOverrides;
  /**
   * Controls Tailwind plugin.
   * @default false
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/settings/settings.md
   */
  tailwind?: false | TailwindOptions;
  /**
   * Controls [Node plugin](https://www.npmjs.com/package/eslint-plugin-n).
   * @default false
   */
  node?: boolean | ConfigWithOverrides;
  /**
   * Enables all strict rules.
   * @default false
   */
  strict?: boolean;
  /**
   * Controls [import plugin](https://www.npmjs.com/package/eslint-plugin-import-x).
   * @default true
   */
  import?: boolean | ImportOptions;
  /**
   * @default true - If you have `type: module` in your `package.json`.
   */
  esm?: boolean;
  /**
   * Controls [test plugin](https://www.npmjs.com/package/eslint-plugin-jest-formatting).
   * @default true - If you have one of `jest`, `vitest`, `cypress`, `@playwright/test` in your dependencies.
   */
  test?: boolean | ConfigWithOverrides;
  /**
   * Controls [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest).
   * @default true - If you have `jest` in your dependencies.
   */
  jest?: boolean | ConfigWithOverrides;
  /**
   * Controls [Vitest plugin](https://www.npmjs.com/package/eslint-plugin-vitest).
   * @default true - If you have `vitest` in your dependencies.
   */
  vitest?: boolean | ConfigWithOverrides;
  /**
   * Controls [Cypress plugin](https://www.npmjs.com/package/eslint-plugin-cypress).
   * @default true - If you have `cypress` in your dependencies.
   */
  cypress?: boolean | ConfigWithOverrides;
  /**
   * Controls [Storybook plugin](https://www.npmjs.com/package/eslint-plugin-storybook).
   * @default true if you have `storybook` in your dependencies.
   */
  storybook?: boolean | ConfigWithOverrides;
  /**
   * Controls [Prettier plugin](https://www.npmjs.com/package/eslint-plugin-prettier).
   * @default true - If you have `prettier` in your dependencies.
   */
  prettier?: boolean | ConfigWithOverrides;
  /**
   * Controls [Playwright plugin](https://www.npmjs.com/package/eslint-plugin-playwright).
   * @default true - If you have `@playwright/test` in your dependencies.
   */
  playwright?: boolean | ConfigWithOverrides;
  /**
   * Controls [Promise plugin](https://www.npmjs.com/package/eslint-plugin-promise).
   * @default true
   */
  promise?: boolean | ConfigWithOverrides;
  /**
   * Controls [Stylistic plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin).
   * @default true
   */
  stylistic?: boolean | ConfigWithOverrides;
  /**
   * Controls [TypeScript plugin](https://www.npmjs.com/package/typescript-eslint).
   * @default true - If you have `typescript` in your dependencies.
   */
  typescript?: boolean | TypeScriptOptions;
  /**
   * Controls [Regex plugin](https://www.npmjs.com/package/eslint-plugin-regexp).
   * @default { allowedCharacterRanges: ['all'] }
   */
  regex?: boolean | RegexOptions;
  /**
   * Disables expensive rules.
   * @default false
   */
  disableExpensiveRules?: boolean;
  /**
   * List of globs to ignore
   * @default []
   */
  ignores?: string[];
  /**
   * .gitignore file path relative to ESLint configuration file. Set to `false` to disable.
   * @default './.gitignore'
   */
  gitignore?: string | false;
}

export declare function defineConfig(initOptions?: Options, ...extend: Linter.Config[]): Linter.Config[];

export declare const init: typeof defineConfig;
