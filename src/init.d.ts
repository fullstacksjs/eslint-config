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
  typescript?: { projects: string[] | string };
  disableExpensiveRules?: boolean;
}

export declare const init: (opts: Options) => import('eslint').Linter.FlatConfig[];
