import reactPlugin from '@eslint-react/eslint-plugin';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import hooksPlugin from 'eslint-plugin-react-hooks';

/** @return { import('eslint').Linter.Config } */
function react() {
  return {
    plugins: {
      ...reactPlugin.configs.all.plugins,
      'react-hooks': hooksPlugin,
      'jsx-a11y': a11yPlugin,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
    rules: {
      '@eslint-react/dom/no-children-in-void-dom-elements': 'warn',
      '@eslint-react/dom/no-dangerously-set-innerhtml': 'off',
      '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
      '@eslint-react/dom/no-find-dom-node': 'error',
      '@eslint-react/dom/no-missing-button-type': 'warn',
      '@eslint-react/dom/no-missing-iframe-sandbox': 'warn',
      '@eslint-react/dom/no-namespace': 'error',
      '@eslint-react/dom/no-render-return-value': 'error',
      '@eslint-react/dom/no-script-url': 'warn',
      '@eslint-react/dom/no-unsafe-iframe-sandbox': 'warn',
      '@eslint-react/dom/no-unsafe-target-blank': 'warn',

      '@eslint-react/ensure-forward-ref-using-ref': 'warn',
      '@eslint-react/no-access-state-in-setstate': 'error',
      '@eslint-react/no-array-index-key': 'warn',
      '@eslint-react/no-children-count': 'warn',
      '@eslint-react/no-children-for-each': 'warn',
      '@eslint-react/no-children-map': 'warn',
      '@eslint-react/no-children-only': 'warn',
      '@eslint-react/no-children-prop': 'warn',
      '@eslint-react/no-children-to-array': 'warn',
      '@eslint-react/no-clone-element': 'warn',
      '@eslint-react/no-comment-textnodes': 'warn',
      '@eslint-react/no-component-will-mount': 'error',
      '@eslint-react/no-component-will-receive-props': 'error',
      '@eslint-react/no-component-will-update': 'error',
      '@eslint-react/no-create-ref': 'error',
      '@eslint-react/no-direct-mutation-state': 'error',
      '@eslint-react/no-duplicate-key': 'error',
      '@eslint-react/no-implicit-key': 'error',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-nested-components': 'warn',
      '@eslint-react/no-redundant-should-component-update': 'error',
      '@eslint-react/no-set-state-in-component-did-mount': 'warn',
      '@eslint-react/no-set-state-in-component-did-update': 'warn',
      '@eslint-react/no-set-state-in-component-will-update': 'warn',
      '@eslint-react/no-string-refs': 'error',
      '@eslint-react/no-unsafe-component-will-mount': 'warn',
      '@eslint-react/no-unsafe-component-will-receive-props': 'warn',
      '@eslint-react/no-unsafe-component-will-update': 'warn',
      '@eslint-react/no-unstable-context-value': 'error',
      '@eslint-react/no-unstable-default-props': 'error',
      '@eslint-react/no-unused-class-component-members': 'warn',
      '@eslint-react/no-unused-state': 'warn',
      '@eslint-react/no-useless-fragment': 'warn',
      '@eslint-react/prefer-destructuring-assignment': 'warn',
      '@eslint-react/prefer-shorthand-boolean': 'warn',
      '@eslint-react/prefer-shorthand-fragment': 'warn',

      '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 'warn',
      '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': 'warn',
      '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'warn',

      '@eslint-react/naming-convention/component-name': 'warn',
      '@eslint-react/naming-convention/filename': 'off',
      '@eslint-react/naming-convention/filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
      '@eslint-react/naming-convention/use-state': 'off',

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

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
}

export default react;