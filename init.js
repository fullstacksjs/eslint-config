const merge = require('deepmerge');

/** @param { import('./init.d').Options } opts */
// eslint-disable-next-line complexity
function init(opts = {}) {
  const { modules = {}, extends: extraExtends = [], ...eslintConfig } = opts;
  if (modules.auto) {
    require('./registerOpts');
    global.fullstacksjs = merge(global.fullstacksjs, modules);
  } else {
    global.fullstacksjs = modules;
  }
  opts = global.fullstacksjs;

  /** @type { import('eslint').Linter.Config } */
  const config = Object.assign(
    {
      extends: [
        require.resolve('./base'),
        require.resolve('./promise'),
        require.resolve('./fp'),
        opts.cspell && require.resolve('./cspell'),
        opts.tailwind && require.resolve('./tailwind'),
        opts.node && require.resolve('./node'),
        opts.graphql && require.resolve('./graphql'),
        opts.import && require.resolve('./import'),
        opts.typescript && require.resolve('./typescript'),
        opts.react && require.resolve('./react.js'),
        opts.next && require.resolve('./next.js'),
        opts.storybook && require.resolve('./storybook'),
        opts.cypress && require.resolve('./cypress'),
        opts.test && require.resolve('./jest'),
        opts.esm && require.resolve('./esm'),
        opts.strict && require.resolve('./strict'),
        opts.prettier && require.resolve('./prettier'),
        opts.disableExpensiveRules && require.resolve('./expensive-rules'),
      ]
        .concat(extraExtends)
        .filter(Boolean),
      parserOptions: {},
      settings: {},
    },
    eslintConfig,
  );

  if (opts.typescript?.parserProject) {
    config.extends.push(require.resolve('./typecheck.js'));
    config.parserOptions = merge(config.parserOptions, {
      project: opts.typescript.parserProject,
    });
  }

  if (opts.typescript?.resolverProject) {
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
