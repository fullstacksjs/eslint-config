import type { ConfigWithOverrides } from '..';

interface ImportOptions extends ConfigWithOverrides {
  internalRegExp?: string;
  lifetime?: number;
  projects?: string | string[];
}
