import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    formatters: {
      css: true,
      html: true,
    },
  },
  {
    // FIXME: Move to shared package
    rules: {
      'jsonc/sort-keys': ['off'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    // FIXME: Move to shared package and migrate to perfectionist/sort-imports
    rules: {
      'perfectionist/sort-imports': ['off'],
      'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'pathGroups': [{
          pattern: 'react',
          group: 'external',
          position: 'before',
        }, {
          pattern: '*.css',
          group: 'index',
          patternOptions: {
            matchBase: true,
          },
          position: 'after',
        }, {
          pattern: '~*/**',
          group: 'external',
          position: 'after',
        }],
        'newlines-between': 'never',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      }],
    },
  },
)
