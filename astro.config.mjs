import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import { SITE } from "./src/config.ts";
import netlify from '@astrojs/netlify/functions';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: "never",
  output: "server",
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  }),
  integrations: [
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: false,
      js: true,
      svg: false,
      logger: 1,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
