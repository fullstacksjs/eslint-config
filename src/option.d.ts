import type { Linter } from 'eslint';

export interface Options extends Linter.Config {
  react?: boolean;
  sort?: boolean;
  next?: boolean;
  tailwind?: boolean | { callees: string[] };
  node?: boolean;
  strict?: boolean;
  import?: boolean | { internalRegExp?: string; lifetime?: number; projects?: string | string[] };
  esm?: boolean;
  test?: boolean;
  jest?: boolean;
  vitest?: boolean;
  cypress?: boolean;
  storybook?: boolean;
  prettier?: boolean;
  playwright?: boolean;
  typescript?: { projects: boolean | string | string[]; tsconfigRootDir?: string };
  disableExpensiveRules?: boolean;
  ignores?: string[];
}

export declare const init: (opts: Options) => import('eslint').Linter.Config[];
