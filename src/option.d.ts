import type { Linter } from 'eslint';

interface ProjectService {
  allowDefaultProject: string[];
  defaultProject: string;
  loadTypeScriptPlugins: boolean;
  maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: number;
}

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
  typescript?: { projectService?: boolean | ProjectService; tsconfigRootDir: string; cacheLifetime?: number };
  disableExpensiveRules?: boolean;
  ignores?: string[];
}

export declare const init: (opts: Options) => import('eslint').Linter.Config[];
