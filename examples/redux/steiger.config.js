import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // disable the `fsd/insignificant-slice` rule for entities and header
    files: [
      './src/entities/product/**',
      './src/entities/cart/**',
      './src/widgets/header/**',
    ],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
])
