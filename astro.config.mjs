// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://neil-watson-uk.github.io',
  base,
  build: {
    assets: 'assets',
  },
});
