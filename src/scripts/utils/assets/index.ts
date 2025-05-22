import type { ImageMetadata } from "astro";

export function getThumbnails(): Record<string, ImageMetadata> {
  const thumbnails = import.meta.glob<ImageMetadata>("src/assets/**/thumbnail.webp", {
    eager: true,
    import: "default",
  });

  return thumbnails;
}
