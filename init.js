require('./registerOpts');
const { compact } = require('@fullstacksjs/toolbox');
const merge = require('deepmerge');

/** @param { import('./init.d').Options } opts */
// eslint-disable-next-line complexity
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
      ...(extendsOverrides ?? []),
    ]),
    parserOptions: {},
    settings: {},
    ...overrides,
  };

  if (opts.react === 'raw') config.extends.push(require.resolve('./react.js'));

  if (opts.typescript?.parserProject) {
    config.parserOptions = merge(config.parserOptions, {
      project: opts.typescript.parserProject,
    });
  }

  if (opts.typescript?.resolverProject) {
    config.extends.push(require.resolve('./typecheck.js'));
    config.settings = merge(config.settings, {
      'import/resolver': {
        typescript: {
          project: opts.typescript.resolverProject,
        },
      },
    });
  }

  return config;
}

module.exports.init = init;
