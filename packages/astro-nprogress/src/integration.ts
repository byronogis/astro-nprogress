/// <reference path="./types/virtual.d.ts" />

import type { AstroIntegration } from 'astro'
import type { Config } from './config'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
import { resolveConfig } from './config'
import { vitePluginAstroNProgressConfig } from './plugins/config'

// const _dirname = path.dirname(fileURLToPath(import.meta.url))

export function integration(userConfig: Config = {}): AstroIntegration {
  return {
    name: 'astro-nprogress',
    hooks: {
      'astro:config:setup': ({
        updateConfig,
      }) => {
        const resolvedConfig = resolveConfig(userConfig)

        updateConfig({
          vite: {
            plugins: [
              vitePluginAstroNProgressConfig(resolvedConfig),
            ],
          },
        })
      },
    },
  }
}
