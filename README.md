# astro-nprogress

<!-- automd:badges name="astro-nprogress" license codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/astro-nprogress)](https://npmjs.com/package/astro-nprogress)
[![npm downloads](https://img.shields.io/npm/dm/astro-nprogress)](https://npm.chart.dev/astro-nprogress)
[![bundle size](https://img.shields.io/bundlephobia/minzip/astro-nprogress)](https://bundlephobia.com/package/astro-nprogress)
[![install size](https://badgen.net/packagephobia/install/astro-nprogress)](https://packagephobia.com/result?p=astro-nprogress)
[![codecov](https://img.shields.io/codecov/c/gh/byronogis/astro-nprogress)](https://codecov.io/gh/byronogis/astro-nprogress)
[![license](https://img.shields.io/github/license/byronogis/astro-nprogress)](https://github.com/byronogis/astro-nprogress/blob/main/LICENSE)

<!-- /automd -->

[![JSDocs][jsdocs-src]][jsdocs-href]

Nprogress using in astro while the astro view transition is enabled.

## Installation

<!-- automd:pm-install name="astro-nprogress" -->

```sh
# ✨ Auto-detect
npx nypm install astro-nprogress

# npm
npm install astro-nprogress

# yarn
yarn add astro-nprogress

# pnpm
pnpm add astro-nprogress

# bun
bun install astro-nprogress

# deno
deno install npm:astro-nprogress
```

<!-- /automd -->

## Basic Usage

```ts
// astro.config.ts

import nprogress from 'astro-nprogress'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [nprogress()],
})
```

```astro
---
// layout.astro
import NProgress from 'astro-nprogress/components'
---

<html>
  <!-- ... -->
  <body>
    <slot />
    <NProgress />
  </body>
</html>

```

<!-- automd:fetch url="gh:byronogis/.github/main/snippets/readme-contrib-node-pnpm.md" -->

## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev` or `pnpm test`

</details>

<!-- /automd -->

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg'/>
  </a>
</p>

## License

<!-- automd:contributors author="byronogis" license="MIT" -->

Published under the [MIT](https://github.com/byronogis/astro-nprogress/blob/main/LICENSE) license.
Made by [@byronogis](https://github.com/byronogis) and [community](https://github.com/byronogis/astro-nprogress/graphs/contributors) 💛
<br><br>
<a href="https://github.com/byronogis/astro-nprogress/graphs/contributors">
<img src="https://contrib.rocks/image?repo=byronogis/astro-nprogress" />
</a>

<!-- /automd -->

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Tue Oct 07 2025)_

<!-- /automd -->

<!-- Badges -->

[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-1fa669
[jsdocs-href]: https://www.jsdocs.io/package/astro-nprogress
