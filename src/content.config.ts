import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { technologyKeys, type TechnologyKey } from '@/data/technologies';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      logo: image().optional(),
      thumbnail: image().optional(),
      techStack: z.array(z.enum(technologyKeys as [TechnologyKey, ...TechnologyKey[]])),
      features: z.array(z.string()),
      url: z.string().url().optional(),
      repo: z.string().url(),
    }),
});

export const collections = {
  projects,
};
