const plugin = require('@next/eslint-plugin-next');

/** @type { import('eslint').Linter.FlatConfig } */
function next() {
  return {
    plugins: { next: plugin },
    rules: {
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/inline-script-id': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-assign-module-variable': 'warn',
      '@next/next/no-async-client-component': 'warn',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-document-import-in-page': 'warn',
      '@next/next/no-duplicate-head': 'warn',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-head-import-in-document': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-script-component-in-head': 'warn',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-sync-scripts': 'warn',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
    },
  };
}

module.exports = next;
