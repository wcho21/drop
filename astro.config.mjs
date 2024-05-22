import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerMetaWordHighlight } from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  site: "https://drop.rooi.dev",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      transformers: [
        transformerMetaWordHighlight(),
      ],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
