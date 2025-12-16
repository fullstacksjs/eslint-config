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
      '@stylistic/jsx-self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        {
          blankLine: 'never',
          prev: ['if', 'for', 'while', 'function', 'class', 'iife', 'try'],
          next: ['if', 'for', 'while', 'function', 'class', 'iife', 'try'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'multiline-block-like',
        },
        {
          blankLine: 'always',
          prev: 'multiline-block-like',
          next: '*',
        },
        { blankLine: 'always', prev: ['type', 'interface'], next: '*' },
        {
          blankLine: 'any',
          prev: ['type', 'interface'],
          next: ['type', 'interface', 'const', 'let', 'var'],
        },
        { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'never', prev: 'directive', next: 'directive' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: '*', next: 'import' },
        { blankLine: 'always', prev: 'directive', next: 'import' },
      ],
      '@stylistic/lines-between-class-members': [
        'warn',
        {
          enforce: [
            { blankLine: 'never', prev: 'field', next: 'field' },
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' },
          ],
        },
      ],
    },
  };
}

export default stylistic;
