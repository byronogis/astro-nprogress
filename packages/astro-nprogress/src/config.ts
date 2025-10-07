import type { NProgressOptions } from 'nprogress'

export function resolveConfig(userConfig: Config): ResolvedConfig {
  const defaultConfig = {
    // ...
  }

  const mergedConfig = {
    ...defaultConfig,
    ...userConfig,
  } as ResolvedConfig

  return mergedConfig
}

export interface Config extends Partial<Omit<NProgressOptions, 'parent'>> {
  // ...
}

export type ResolvedConfig = any
