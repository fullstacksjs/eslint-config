import type { Linter } from 'eslint';

interface ProjectService {
  allowDefaultProject: string[];
  defaultProject: string;
  loadTypeScriptPlugins: boolean;
  maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: number;
}

export interface Options extends Linter.Config {
  /**
   * @default true if you have `react` or `react-dom` in your dependencies
   * Controls react plugin.
   */
  react?: boolean;
  /**
   * @default true
   */
  sort?: boolean;
  /**
   * @default true if you have `next` in your dependencies
   * Controls next plugin.
   */
  next?: boolean;
  /**
   * @default true if you have `tailwind` in your dependencies
   * Controls tailwind plugin.
   */
  tailwind?: boolean | { callees: string[] };
  /**
   * @default false
   * Controls [node plugin](https://www.npmjs.com/package/eslint-plugin-n).
   */
  node?: boolean;
  /**
   * @default false
   * Enables all strict rules.
   */
  strict?: boolean;
  /**
   * @default true
   * Controls [import plugin](https://www.npmjs.com/package/eslint-plugin-import-x).
   */
  import?: boolean | { internalRegExp?: string; lifetime?: number; projects?: string | string[] };
  /**
   * @default true if you have `type: module` in your `package.json`.
   */
  esm?: boolean;
  /**
   * @default true if you have one of `jest`, `vitest`, `cypress`, `playwright`, `storybook`, `prettier` in your dependencies.
   * Controls [test plugin](https://www.npmjs.com/package/eslint-plugin-jest-formatting).
   */
  test?: boolean;
  /**
   * @default true if you have `jest` in your dependencies.
   * Controls [jest plugin](https://www.npmjs.com/package/eslint-plugin-jest).
   */
  jest?: boolean;
  /**
   * @default true if you have `vitest` in your dependencies.
   * Controls [vitest plugin](https://www.npmjs.com/package/eslint-plugin-vitest).
   */
  vitest?: boolean;
  /**
   * @default true if you have `cypress` in your dependencies.
   * Controls [cypress plugin](https://www.npmjs.com/package/eslint-plugin-cypress).
   */
  cypress?: boolean;
  /**
   * @default true if you have `storybook` in your dependencies.
   * Controls [storybook plugin](https://www.npmjs.com/package/eslint-plugin-storybook).
   */
  storybook?: boolean;
  /**
   * @default true if you have `prettier` in your dependencies.
   * Controls [prettier plugin](https://www.npmjs.com/package/eslint-plugin-prettier).
   */
  prettier?: boolean;
  /**
   * @default true if you have `playwright` in your dependencies.
   * Controls [playwright plugin](https://www.npmjs.com/package/eslint-plugin-playwright).
   */
  playwright?: boolean;
  /**
   * @default true if you have `typescript` in your dependencies.
   * Controls [typescript plugin](https://www.npmjs.com/package/typescript-eslint).
   */
  typescript?: { projectService?: boolean | ProjectService; tsconfigRootDir: string; cacheLifetime?: number };
  /**
   * @default false
   * Disables expensive rules.
   */
  disableExpensiveRules?: boolean;
  /**
   * @default []
   * List of globs to ignore.
   */
  ignores?: string[];
}

export declare function defineConfig(
  initOptions?: Options,
  ...extend: Linter.Config[]
): Linter.Config[];

export declare const init: (opts: Options) => import('eslint').Linter.Config[];
