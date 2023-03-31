/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'texture-dotted-smal': ['radial-gradient(hsla(var(--bc)/.2) .5px,hsla(var(--b2)/1) .5px);  background-position: 0 0, 50px 50px; background-size: 7px 7px;'],
      'texture-dotted-large': ['radial-gradient(hsla(var(--bc)/.2) 1.5px,hsla(var(--b2)/0) 1.5px);  background-position: 0 0, 50px 50px; background-size: 7px 7px;'],

    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [require("daisyui"),  require('@tailwindcss/typography')],
}
