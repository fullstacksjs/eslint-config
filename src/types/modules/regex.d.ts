import type { ConfigWithOverrides } from '..';

interface RegexOptions extends ConfigWithOverrides {
  allowedCharacterRanges: string[];
}
