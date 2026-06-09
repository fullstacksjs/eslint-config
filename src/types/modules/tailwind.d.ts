import type { ConfigWithOverrides } from '..';

interface TailwindOptionsWithEntryPoint extends ConfigWithOverrides {
  entryPoint: string;
  tailwindConfig?: string;
}

interface TailwindOptionsWithConfig extends ConfigWithOverrides {
  entryPoint?: string;
  tailwindConfig: string;
}

type TailwindOptions = TailwindOptionsWithConfig | TailwindOptionsWithEntryPoint;
