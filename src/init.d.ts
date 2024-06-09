export interface Options {
  react?: boolean;
  next?: boolean;
  tailwind?: boolean;
  node?: boolean;
  strict?: boolean;
  import?: boolean | { internalRegExp?: string; lifetime?: number; projects?: string[] | string };
  esm?: boolean;
  fp?: boolean;
  graphql?: boolean;
  test?: boolean;
  jest?: boolean;
  vitest?: boolean;
  cypress?: boolean;
  storybook?: boolean;
  prettier?: boolean;
  playwright?: boolean;
  typescript?: { projects: string[] | string | boolean; tsconfigRootDir?: string };
  disableExpensiveRules?: boolean;
  ignores?: string[];
}

export declare const init: (opts: Options) => import('eslint').Linter.FlatConfig[];
