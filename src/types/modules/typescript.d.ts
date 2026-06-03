import type { ConfigWithOverrides } from '..';

/**
 * Granular options to configure the project service.
 */
interface ProjectServiceOptions {
  /**
   * Globs of files to allow running with the default project compiler options
   * despite not being matched by the project service.
   */
  allowDefaultProject?: string[];

  /**
   * Path to a TSConfig to use instead of TypeScript's default project configuration.
   * @default 'tsconfig.json'
   */
  defaultProject?: string;

  /**
   * Whether to allow TypeScript plugins as configured in the TSConfig.
   */
  loadTypeScriptPlugins?: boolean;

  /**
   * The maximum number of files {@link allowDefaultProject} may match.
   * Each file match slows down linting, so if you do need to use this, please
   * file an informative issue on typescript-eslint explaining why - so we can
   * help you avoid using it!
   * @default 8
   */
  maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING?: number;
}

interface TypeScriptOptions extends ConfigWithOverrides {
  projectService?: boolean | ProjectServiceOptions;
  tsconfigRootDir?: string;
  cacheLifetime?: number;
}
