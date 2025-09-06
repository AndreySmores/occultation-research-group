import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    video: z.string().optional(),
    youtube: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  news,
};
