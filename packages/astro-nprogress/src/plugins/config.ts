import type { ViteUserConfig } from 'astro'
import type { ResolvedConfig } from '../config'

// eslint-disable-next-line ts/explicit-function-return-type
export function vitePluginAstroNProgressConfig(resolvedConfig: ResolvedConfig) {
  const virtualModuleId = 'virtual:astro-nprogress-config'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-astro-nprogress-config',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return /* js */`export default ${JSON.stringify(resolvedConfig)}
        `
      }
    },
  } satisfies NonNullable<ViteUserConfig['plugins']>[number]
}
