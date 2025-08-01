import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  transformerNotationWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://drop.rooi.dev",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      transformers: [
        transformerNotationWordHighlight(),
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationErrorLevel(),
      ],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
