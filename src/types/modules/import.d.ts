import type { ConfigWithOverrides } from '..';

interface ImportOptions extends ConfigWithOverrides {
  /**
   * Require (`always`) or forbid (`never`) file extensions in imports. Only JS (`.mjs`, `.js`, `.jsx`, `.cjs`) and TS (`.ts`, `.tsx`, `.cts`, `.mts`) imports are checked; package imports are never checked.
   * @default 'never'
   */
  extensions?: 'always' | 'never';
  internalRegExp?: string;
  lifetime?: number;
  projects?: string | string[];
}
