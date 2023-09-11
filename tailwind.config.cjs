import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', ...defaultTheme.fontFamily.sans],
        serif: ['"Noto Serif"', ...defaultTheme.fontFamily.serif],
        mono: ['"Noto Sans Mono"', ...defaultTheme.fontFamily.mono],
        display: ['"Secular One"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
