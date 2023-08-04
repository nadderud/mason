import { defineConfig } from "astro/config";
import compress from "astro-compress";
import { SITE } from "./src/config.ts";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: "ignore",
  output: "server",
  adapter: netlify({
    builders: true,
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
        "~": "/src",
      },
    },
  },
});
