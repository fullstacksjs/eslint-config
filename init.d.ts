type Config = import('eslint').Linter.Config;
export interface Options extends Config {
  modules: {
    auto?: boolean;
    react?: 'next' | 'raw';
    typescript?: { parserProject: string[] | string; resolverProject: string[] | string };
    node?: boolean;
    strict?: boolean;
    import?: boolean;
    esm?: boolean;
    graphql?: boolean;
    test?: boolean;
    cypress?: boolean;
    storybook?: boolean;
  };
}

export declare const init: (opts: Options) => import('eslint').Linter.Config;
