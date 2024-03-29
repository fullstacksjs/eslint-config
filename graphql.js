/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['*.graphql', '*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/alphabetize': ['warn', { fields: ['ObjectTypeDefinition'] }],
        '@graphql-eslint/description-style': 'warn',
        '@graphql-eslint/executable-definitions': 'off',
        '@graphql-eslint/fields-on-correct-type': 'warn',
        '@graphql-eslint/fragments-on-composite-type': 'warn',
        '@graphql-eslint/input-name': 'warn',
        '@graphql-eslint/known-argument-names': 'warn',
        '@graphql-eslint/known-directives': 'warn',
        '@graphql-eslint/known-fragment-names': 'warn',
        '@graphql-eslint/known-type-names': 'warn',
        '@graphql-eslint/lone-anonymous-operation': 'warn',
        '@graphql-eslint/lone-executable-definition': 'off',
        '@graphql-eslint/lone-schema-definition': 'warn',
        '@graphql-eslint/match-document-filename': ['warn', { query: 'camelCase', mutation: 'camelCase', subscription: 'camelCase' }],
        '@graphql-eslint/naming-convention': 'warn',
        '@graphql-eslint/no-anonymous-operations': 'warn',
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 'warn',
        '@graphql-eslint/no-deprecated': 'warn',
        '@graphql-eslint/no-duplicate-fields': 'warn',
        '@graphql-eslint/no-fragment-cycles': 'warn',
        '@graphql-eslint/no-hashtag-description': 'warn',
        '@graphql-eslint/no-one-place-fragments': 'off',
        '@graphql-eslint/no-root-type': 'off',
        '@graphql-eslint/no-scalar-result-type-on-mutation': 'warn',
        '@graphql-eslint/no-typename-prefix': 'warn',
        '@graphql-eslint/no-undefined-variables': 'warn',
        '@graphql-eslint/no-unreachable-types': 'warn',
        '@graphql-eslint/no-unused-fields': 'warn',
        '@graphql-eslint/no-unused-fragments': 'warn',
        '@graphql-eslint/no-unused-variables': 'warn',
        '@graphql-eslint/one-field-subscriptions': 'warn',
        '@graphql-eslint/overlapping-fields-can-be-merged': 'warn',
        '@graphql-eslint/possible-fragment-spread': 'warn',
        '@graphql-eslint/possible-type-extension': 'warn',
        '@graphql-eslint/provided-required-arguments': 'warn',
        '@graphql-eslint/relay-arguments': 'warn',
        '@graphql-eslint/relay-connection-types': 'warn',
        '@graphql-eslint/relay-edge-types': 'warn',
        '@graphql-eslint/relay-page-info': 'warn',
        '@graphql-eslint/require-deprecation-date': 'warn',
        '@graphql-eslint/require-deprecation-reason': 'warn',
        '@graphql-eslint/require-description': 'off',
        '@graphql-eslint/require-field-of-type-query-in-mutation-result': 'warn',
        '@graphql-eslint/require-id-when-available': 'warn',
        '@graphql-eslint/require-import-fragment': 'off',
        '@graphql-eslint/require-nullable-fields-with-oneof': 'warn',
        '@graphql-eslint/require-nullable-result-in-root': 'off',
        '@graphql-eslint/require-type-pattern-with-oneof': 'warn',
        '@graphql-eslint/scalar-leafs': 'warn',
        '@graphql-eslint/selection-set-depth': 'off',
        '@graphql-eslint/strict-id-in-types': 'warn',
        '@graphql-eslint/unique-argument-names': 'warn',
        '@graphql-eslint/unique-directive-names-per-location': 'warn',
        '@graphql-eslint/unique-directive-names': 'warn',
        '@graphql-eslint/unique-enum-value-names': 'warn',
        '@graphql-eslint/unique-field-definition-names': 'warn',
        '@graphql-eslint/unique-fragment-name': 'warn',
        '@graphql-eslint/unique-input-field-names': 'warn',
        '@graphql-eslint/unique-operation-name': 'warn',
        '@graphql-eslint/unique-operation-types': 'warn',
        '@graphql-eslint/unique-type-names': 'warn',
        '@graphql-eslint/unique-variable-names': 'warn',
        '@graphql-eslint/value-literals-of-correct-type': 'warn',
        '@graphql-eslint/variables-are-input-types': 'warn',
        '@graphql-eslint/variables-in-allowed-position': 'warn',

        'spaced-comment': 'off',
      },
    },
  ],
};
