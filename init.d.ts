type Config = import('eslint').Linter.Config;
export interface Options extends Config {
  modules: {
    auto?: boolean;
    react?: boolean;
    next?: boolean;
    cspell?: boolean;
    typescript?: { parserProject: string[] | string; resolverProject: string[] | string };
    tailwind?: boolean;
    node?: boolean;
    strict?: boolean;
    import?: boolean;
    esm?: boolean;
    graphql?: boolean;
    test?: boolean;
    cypress?: boolean;
    storybook?: boolean;
    prettier?: boolean;
    disableExpensiveRules?: boolean;
  };
}

export declare const init: (opts: Options) => import('eslint').Linter.Config;
