import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { transformerMetaWordHighlight, transformerNotationDiff, transformerNotationHighlight, transformerNotationErrorLevel } from "@shikijs/transformers";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://drop.rooi.dev",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      transformers: [transformerMetaWordHighlight(), transformerNotationDiff(), transformerNotationHighlight(), transformerNotationErrorLevel()],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
