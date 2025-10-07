import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  exports: {
    devExports: true,
    customExports(pkg, _context) {
      pkg['./component'] = './src/components/NProgress.astro'
      return pkg
    },
  },
  dts: true,
})
