import type { ImageMetadata } from "astro";

export function getThumbnails() {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "src/assets/**/thumbnail.webp",
    { eager: true },
  );

  return images;
}
