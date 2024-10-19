import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [{ input: './src', outDir: './cjs', format: 'cjs', builder: 'mkdist', declaration: false }],
  rollup: {
    cjsBridge: true,
  },
});
