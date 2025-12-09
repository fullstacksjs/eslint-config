import stylisticPlugin from '@stylistic/eslint-plugin';

/**
 * @param { import('..').Options } options
 * @return { Promise<import('eslint').Linter.Config> }
 */
function stylistic() {
  return {
    plugins: { '@stylistic': stylisticPlugin },
    rules: {
      '@stylistic/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never', propElementValues: 'always' }],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['return', 'if', 'for', 'while'] },
        { blankLine: 'always', prev: ['block-like', 'function', 'class', 'iife', 'try'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['block-like', 'function', 'class', 'iife', 'try'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'never', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: '*', next: 'import' },
        { blankLine: 'always', prev: 'directive', next: 'import' },
      ],
      '@stylistic/jsx-self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],
    },
  };
}

export default stylistic;
