import type { ConfigWithOverrides } from '..';

interface ImportOptions extends ConfigWithOverrides {
  /**
   * Require (`always`) or forbid (`never`) file extensions in imports. Package imports are never checked.
   * @default 'never'
   */
  extensions?: 'always' | 'never';
  internalRegExp?: string;
  lifetime?: number;
  projects?: string | string[];
}
