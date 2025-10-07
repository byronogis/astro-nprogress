import { copyFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { glob } from 'tinyglobby'

glob('README*.md').then((files) => {
  files.forEach((file) => {
    copyFile(file, `packages/astro-nprogress/${basename(file)}`)
  })
})

if (import.meta.vitest) {
  // const { execSync } = await import('node:child_process')
  const { readFileSync } = await import('node:fs')
  const { it, expect } = import.meta.vitest

  it('should copy README.md correct', async () => {
    const readme = readFileSync('README.md', 'utf8')
    // noneed this because it's already run while testing since file defined in test.includeSource
    // execSync('node scripts/copy-readme.mjs')
    const copiedReadme = readFileSync('packages/astro-nprogress/README.md', 'utf8')
    expect(copiedReadme).toBe(readme)
  })
}
