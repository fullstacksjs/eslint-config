import reactPlugin from '@eslint-react/eslint-plugin';
import { mergeConfigs } from 'eslint-flat-config-utils';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import { parser } from 'typescript-eslint';

import { predicate, strict } from '../utils/conditions.mjs';
import { globs } from '../utils/globs.mjs';

/**
 * @param { import('../types').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function react(options = {}) {
  const projectService = options.typescript && options.typescript.tsconfigRootDir && options.typescript.projectService;
  const isObject = typeof options.react === 'object';

  const reactConfig = {
    name: 'react',
    files: [globs.js, globs.jsx, globs.ts, globs.tsx],
    plugins: {
      ...reactPlugin.configs.all.plugins,
      'jsx-a11y': a11yPlugin,
    },
    ...predicate(projectService, {
      languageOptions: {
        parser,
        parserOptions: { ...options.typescript },
      },
    }),
    settings: {
      'react-x': {
        ...predicate(isObject && 'version' in options.react, {
          version: options.react.version,
        }),
        ...predicate(isObject && 'importSource' in options.react, {
          importSource: options.react.importSource,
        }),
        ...predicate(isObject && 'compilationMode' in options.react, {
          compilationMode: options.react.compilationMode,
        }),
        ...predicate(isObject && 'polymorphicPropName' in options.react, {
          polymorphicPropName: options.react.polymorphicPropName,
        }),
        ...predicate(isObject && 'additionalStateHooks' in options.react, {
          additionalStateHooks: options.react.additionalStateHooks,
        }),
        ...predicate(isObject && 'additionalEffectHooks' in options.react, {
          additionalEffectHooks: options.react.additionalEffectHooks,
        }),
      },
    },
    rules: {
      '@eslint-react/dom-no-void-elements-with-children': 'warn',
      '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
      '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',
      '@eslint-react/dom-no-find-dom-node': 'error',
      '@eslint-react/dom-no-flush-sync': 'off',
      '@eslint-react/dom-no-use-form-state': 'warn',
      '@eslint-react/dom-no-hydrate': 'warn',
      '@eslint-react/dom-no-missing-button-type': 'warn',
      '@eslint-react/dom-no-missing-iframe-sandbox': 'warn',
      '@eslint-react/dom-no-render-return-value': 'error',
      '@eslint-react/dom-no-render': 'warn',
      '@eslint-react/dom-no-script-url': 'warn',
      '@eslint-react/dom-no-string-style-prop': 'error',
      '@eslint-react/dom-no-unsafe-iframe-sandbox': 'warn',
      '@eslint-react/dom-no-unsafe-target-blank': 'warn',

      '@eslint-react/jsx-no-comment-textnodes': 'warn',
      '@eslint-react/jsx-no-children-prop': 'warn',
      '@eslint-react/jsx-no-children-prop-with-children': 'warn',
      '@eslint-react/jsx-no-key-after-spread': 'error',
      '@eslint-react/jsx-no-useless-fragment': 'warn',
      '@eslint-react/jsx-no-namespace': 'error',

      '@eslint-react/no-access-state-in-setstate': 'error',
      '@eslint-react/no-array-index-key': 'warn',
      '@eslint-react/no-children-count': 'warn',
      '@eslint-react/no-children-for-each': 'warn',
      '@eslint-react/no-children-map': 'warn',
      '@eslint-react/no-children-only': 'warn',
      '@eslint-react/no-children-to-array': 'warn',
      '@eslint-react/no-clone-element': 'warn',
      '@eslint-react/no-component-will-mount': 'error',
      '@eslint-react/no-component-will-receive-props': 'error',
      '@eslint-react/no-component-will-update': 'error',
      '@eslint-react/no-context-provider': 'warn',

      '@eslint-react/no-create-ref': 'error',
      '@eslint-react/no-direct-mutation-state': 'error',
      '@eslint-react/no-duplicate-key': 'error',
      '@eslint-react/no-forward-ref': 'warn',
      '@eslint-react/no-missing-context-display-name': 'warn',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-misused-capture-owner-stack': 'error',
      '@eslint-react/no-nested-component-definitions': 'warn',
      '@eslint-react/no-nested-lazy-component-declarations': 'error',
      '@eslint-react/no-set-state-in-component-did-mount': 'warn',
      '@eslint-react/no-set-state-in-component-did-update': 'warn',
      '@eslint-react/no-set-state-in-component-will-update': 'warn',
      '@eslint-react/no-unsafe-component-will-mount': 'warn',
      '@eslint-react/no-unsafe-component-will-receive-props': 'warn',
      '@eslint-react/no-unsafe-component-will-update': 'warn',
      '@eslint-react/no-unstable-context-value': 'error',
      '@eslint-react/no-unstable-default-props': 'error',
      '@eslint-react/no-unused-class-component-members': 'warn',
      '@eslint-react/no-unused-state': 'warn',

      '@eslint-react/no-use-context': 'warn',
      '@eslint-react/no-unnecessary-use-prefix': 'warn',

      '@eslint-react/naming-convention-context-name': 'warn',
      '@eslint-react/naming-convention-id-name': 'warn',
      '@eslint-react/naming-convention-ref-name': 'warn',

      '@eslint-react/use-state': [
        'warn',
        {
          enforceAssignment: true,
          enforceSetterName: false,
          enforceLazyInitialization: true,
        },
      ],

      '@eslint-react/web-api-no-leaked-timeout': 'error',
      '@eslint-react/web-api-no-leaked-event-listener': 'error',
      '@eslint-react/web-api-no-leaked-interval': 'error',
      '@eslint-react/web-api-no-leaked-resize-observer': 'error',
      '@eslint-react/web-api-no-leaked-fetch': 'error',

      '@eslint-react/rsc-function-definition': 'error',

      '@eslint-react/rules-of-hooks': 'error',
      '@eslint-react/exhaustive-deps': 'error',
      '@eslint-react/error-boundaries': 'error',
      '@eslint-react/globals': 'error',
      '@eslint-react/immutability': 'error',
      '@eslint-react/purity': 'error',
      '@eslint-react/refs': 'error',
      '@eslint-react/set-state-in-effect': strict('error'),
      '@eslint-react/set-state-in-render': 'error',
      '@eslint-react/static-components': strict('error'),
      '@eslint-react/unsupported-syntax': 'error',
      '@eslint-react/use-memo': 'error',

      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/autocomplete-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'warn',
      'jsx-a11y/anchor-ambiguous-text': 'off',
      'jsx-a11y/prefer-tag-over-role': 'off',
    },
  };

  return mergeConfigs(reactConfig, options.react.overrides ?? {});
}

export default react;
