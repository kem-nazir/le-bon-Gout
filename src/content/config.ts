import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    date: z.string().optional(),
    couverture: z.string().optional(),
    categorie: z.string().optional(),
    extrait: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    url: z.string().optional(),
    categorie: z.string().optional(),
  }),
});

export const collections = { posts, projects };
