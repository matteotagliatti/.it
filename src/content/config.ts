import { defineCollection, z } from "astro:content";

const highlightsCollection = defineCollection({
  type: "content",
  schema: z.object({
    tipologia: z.enum(["libri", "articoli"]),
    titolo: z.string(),
    autore: z.string(),
    anno: z.number(),
    url: z.string().optional(),
  }),
});

export const collections = {
  highlights: highlightsCollection,
};
