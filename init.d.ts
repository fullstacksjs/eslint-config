export interface Options {
  react: 'next' | 'raw';
  typescript: { parserProject: string[] | string; resolverProject: string[] | string };
  node: boolean;
  strict: boolean;
  import: boolean;
  esm: boolean;
  graphql: boolean;
  test: boolean;
  cypress: boolean;
  storybook: boolean;
  overrides: import('eslint').Linter.Config;
}

declare const init: (opts: Options) => import('eslint').Linter.Config;
export default init;
