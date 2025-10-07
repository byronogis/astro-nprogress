import { coverageConfigDefaults, defaultExclude, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [
      'playground/**',
      ...defaultExclude,
    ],
    coverage: {
      enabled: true,
      exclude: [
        '**/dist/**',
        '**/coverage/**',
        'playground/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
    includeSource: [
      'scripts/**',
    ],
  },
})
