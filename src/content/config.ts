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

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    data: z.string(),
  }),
});

export const collections = {
  highlights: highlightsCollection,
  notes: notesCollection,
};
