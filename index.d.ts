import { type Linter } from 'eslint';

export interface Options {
  react: 'next' | 'raw';
  typescript: boolean | { project: string[] | string };
  import: boolean;
  esm: boolean;
  graphql: boolean;
  test: boolean;
  cypress: boolean;
  storybook: boolean;
  overrides: Linter.Config;
}
