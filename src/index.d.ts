import type { Linter } from 'eslint';

interface ProjectService {
  allowDefaultProject: string[];
  defaultProject: string;
  loadTypeScriptPlugins: boolean;
  maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: number;
}

type TailwindConfig = {
  callees?: string[];
  variables?: string[];
  attributes?: string[];
  tags?: string[];
} & ({ entryPoint: string; tailwindConfig?: string } | { entryPoint?: string; tailwindConfig: string });

export interface Options extends Linter.Config {
  /**
   * Controls React plugin.
   * @default true - If you have `react` or `react-dom` in your dependencies.
   */
  react?: boolean;
  /**
   * @default true
   */
  sort?: boolean;
  /**
   * Controls Next plugin.
   * @default true - If you have `next` in your dependencies.
   */
  next?: boolean;
  /**
   * Controls Tailwind plugin.
   * @default false
   * @see https://github.com/schoero/eslint-plugin-better-tailwindcss/blob/main/docs/settings/settings.md
   */
  tailwind?: false | TailwindConfig;
  /**
   * Controls [Node plugin](https://www.npmjs.com/package/eslint-plugin-n).
   * @default false
   */
  node?: boolean;
  /**
   * Enables all strict rules.
   * @default false
   */
  strict?: boolean;
  /**
   * Controls [import plugin](https://www.npmjs.com/package/eslint-plugin-import-x).
   * @default true
   */
  import?: boolean | { internalRegExp?: string; lifetime?: number; projects?: string | string[] };
  /**
   * @default true - If you have `type: module` in your `package.json`.
   */
  esm?: boolean;
  /**
   * Controls [test plugin](https://www.npmjs.com/package/eslint-plugin-jest-formatting).
   * @default true - If you have one of `jest`, `vitest`, `cypress`, `playwright`, `storybook`, `prettier` in your dependencies.
   */
  test?: boolean;
  /**
   * Controls [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest).
   * @default true - If you have `jest` in your dependencies.
   */
  jest?: boolean;
  /**
   * Controls [Vitest plugin](https://www.npmjs.com/package/eslint-plugin-vitest).
   * @default true - If you have `vitest` in your dependencies.
   */
  vitest?: boolean;
  /**
   * Controls [Cypress plugin](https://www.npmjs.com/package/eslint-plugin-cypress).
   * @default true - If you have `cypress` in your dependencies.
   */
  cypress?: boolean;
  /**
   * Controls [Storybook plugin](https://www.npmjs.com/package/eslint-plugin-storybook).
   * @default true if you have `storybook` in your dependencies.
   */
  storybook?: boolean;
  /**
   * Controls [Prettier plugin](https://www.npmjs.com/package/eslint-plugin-prettier).
   * @default true - If you have `prettier` in your dependencies.
   */
  prettier?: boolean;
  /**
   * Controls [Playwright plugin](https://www.npmjs.com/package/eslint-plugin-playwright).
   * @default true - If you have `playwright` in your dependencies.
   */
  playwright?: boolean;
  /**
   * Controls [TypeScript plugin](https://www.npmjs.com/package/typescript-eslint).
   * @default true - If you have `typescript` in your dependencies.
   */
  typescript?: { projectService?: boolean | ProjectService; tsconfigRootDir: string; cacheLifetime?: number };
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
  /**
   * Controls regex plugin.
   * @default true
   */
  regex?: boolean | { allowedCharacterRanges: string[] };
}

export declare function defineConfig(initOptions?: Options, ...extend: Linter.Config[]): Linter.Config[];

export declare const init: typeof defineConfig;
