import { defineCollection, z } from "astro:content";

const highlightsCollection = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    autore: z.string(),
  }),
});

export const collections = {
  highlights: highlightsCollection,
};
