import type { ConfigWithOverrides } from '..';

interface TailwindOptionsBase extends ConfigWithOverrides {
  callees?: string[];
  variables?: string[];
  attributes?: string[];
  tags?: string[];
}

interface TailwindOptionsWithEntryPoint extends TailwindOptionsBase {
  entryPoint: string;
  tailwindConfig?: string;
}

interface TailwindOptionsWithConfig extends TailwindOptionsBase {
  entryPoint?: string;
  tailwindConfig: string;
}

type TailwindOptions = TailwindOptionsWithConfig | TailwindOptionsWithEntryPoint;
