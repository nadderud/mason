import { defineConfig } from 'astro/config';
import { SITE } from './src/config.ts';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: 'ignore',
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  },
});
