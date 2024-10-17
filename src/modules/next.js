import plugin from '@next/eslint-plugin-next';

/** @type { import('eslint').Linter.Config } */
function next() {
  return {
    plugins: { next: plugin },
    rules: {
      'next/google-font-display': 'warn',
      'next/google-font-preconnect': 'warn',
      'next/inline-script-id': 'warn',
      'next/next-script-for-ga': 'warn',
      'next/no-assign-module-variable': 'warn',
      'next/no-async-client-component': 'warn',
      'next/no-before-interactive-script-outside-document': 'warn',
      'next/no-css-tags': 'warn',
      'next/no-document-import-in-page': 'warn',
      // 'next/no-duplicate-head': 'warn',
      'next/no-head-element': 'warn',
      'next/no-head-import-in-document': 'warn',
      'next/no-html-link-for-pages': 'warn',
      'next/no-img-element': 'warn',
      'next/no-page-custom-font': 'warn',
      'next/no-script-component-in-head': 'warn',
      'next/no-styled-jsx-in-document': 'warn',
      'next/no-sync-scripts': 'warn',
      'next/no-title-in-document-head': 'warn',
      'next/no-typos': 'warn',
      'next/no-unwanted-polyfillio': 'warn',
    },
  };
}

export default next;
