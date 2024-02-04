import { getCollection } from "astro:content";
import * as pages from "@/scripts/utils/pages";

const collection = await getCollection("blog");
const articles = pages.sortCollection(collection);

export { articles };
