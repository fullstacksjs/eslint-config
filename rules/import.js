module.exports = {
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': ['off', { ignoreTypeImports: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-relative-packages': 'error',
    'import/no-import-module-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['off', { groups: ['builtin', ['external', 'internal'], 'parent', ['sibling', 'index']] }], // collision
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-imports': 'off',
  },
};
