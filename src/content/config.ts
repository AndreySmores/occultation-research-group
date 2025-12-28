import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string(),
    authorEmail: z.string().optional(),
    images: z.array(z.string()).optional(),
    image: z.string().optional(), // Keep for backward compatibility
    video: z.string().optional(),
    youtube: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedLinks: z.array(z.object({
      title: z.string(),
      url: z.string(),
      description: z.string().optional(),
      type: z.enum(['article', 'paper', 'video', 'website', 'other']).optional(),
    })).optional(),
    // External article fields
    externalUrl: z.string().url().optional(),
    source: z.string().optional(), // e.g., "NASA News", "Science Daily"
    isExternal: z.boolean().optional(),
  }),
});

export const collections = {
  news,
};
