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
    rules: {
      'jsonc/sort-keys': ['off'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
)
