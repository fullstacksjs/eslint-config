require('./registerOpts');
const { compact } = require('@fullstacksjs/toolbox');
const merge = require('deepmerge');

/** @param { import('./init.d').Options } opts */
function init(opts = {}) {
  const { extends: extendsOverrides, ...overrides } = opts.overrides;
  global.fullstacksjs = merge(global.fullstacksjs, opts);

  /** @type { import('eslint').Linter.Config } */
  const config = {
    extends: compact([
      require.resolve('./base'),
      require.resolve('./promise'),
      require.resolve('./fp'),
      opts.node && require.resolve('./node'),
      opts.cypress && require.resolve('./cypress'),
      opts.test && require.resolve('./jest'),
      opts.graphql && require.resolve('./graphql'),
      opts.storybook && require.resolve('./storybook'),
      opts.importModule && require.resolve('./import'),
      opts.typescript && require.resolve('./typescript'),
      opts.esm && require.resolve('./esm'),
      opts.strict && require.resolve('./strict'),
      require.resolve('./prettier'),
      ...extendsOverrides,
    ]),
    ...overrides,
  };

  if (opts.react === 'raw') config.extends.push(require.resolve('./react.js'));

  if (opts.typescript?.parserProject) {
    config.parserOptions = {
      ...config.parserOptions,
      project: opts.typescript.parserProject,
    };
  }

  if (opts.typescript?.resolverProject) {
    config.extends.push(require.resolve('./typecheck.js'));
    config.settings = {
      ...config.settings,
      'import/resolver': {
        ...config.settings['import/resolver'],
        typescript: {
          ...config.settings['import/resolver'].typescript,
          project: opts.typescript.parserProject,
        },
      },
    };
  }

  return config;
}

module.exports = init;
