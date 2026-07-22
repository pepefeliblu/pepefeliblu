import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string().default('Anonymous'),
        tags: z.array(z.string()),
        image: z.string().optional(),
        published: z.boolean().optional(),
        canonical_url: z.string().optional(),
    }),
});

export const collections = { blog };
