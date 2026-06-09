import type { ConfigWithOverrides } from '..';

interface ReactOptions extends ConfigWithOverrides {
  version?: string;
  importSource?: string;
  compilationMode?: 'all' | 'annotation' | 'infer' | 'syntax'; // Use the same compilationMode as the React Compiler config for consistent analysis
  polymorphicPropName?: string;
  additionalStateHooks?: string;
  additionalEffectHooks?: string;
}
