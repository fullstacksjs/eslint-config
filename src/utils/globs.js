const srcExt = '?([cm])[jt]s?(x)';

export const globs = {
  src: `**/*.${srcExt}`,
  js: '**/*.?([cm])js',
  jsx: '**/*.?([cm])jsx',
  ts: '**/*.?([cm])ts',
  tsx: '**/*.?([cm])tsx',

  style: '**/*.{css,less,scss}',
  css: '**/*.css',
  postcss: '**/*.postcss',
  less: '**/*.less',
  scss: '**/*.scss',

  json: '**/*.json',
  json5: '**/*.json5',
  jsonc: '**/*.jsonc',
  allJson: '**/*.json?([c5])',

  md: '**/*.md',
  svelte: '**/*.svelte',
  vue: '**/*.vue',
  yaml: '**/*.{yml,yaml}',
  toml: '**/*.toml',
  xml: '**/*.xml',
  html: '**/*.html',
  astro: '**/*.astro',
  graphql: '**/*.{gql,graphql}',

  storybook: ['**/*.stories.{js,jsx,ts,tsx}'],

  test: [`**/__tests__/*.${srcExt}`, `**/*.spec.${srcExt}`, `**/*.test.${srcExt}`],
  e2e: [`**/e2e/*.${srcExt}`],
};

export const allSrc = [globs.src, globs.style, globs.allJson, globs.md, globs.svelte, globs.vue, globs.yaml, globs.xml, globs.html];
export const ignoreGlobs = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.nx',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/LICENSE*',
  '**/*.min.*',

  '**/__snapshots__',
];
