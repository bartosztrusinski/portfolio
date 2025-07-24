import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { technologyKeys, type TechnologyKey } from '@/data/technologies';

export type Project = z.infer<ReturnType<typeof projectSchema>>;

const projectSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    description: z.string(),
    techStack: z.array(z.enum(technologyKeys as [TechnologyKey, ...TechnologyKey[]])),
    features: z.array(z.string()),
    logo: image().optional(),
    thumbnail: image(),
    repo: z.string().url(),
    url: z.string().url().optional(),
  });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/projects' }),
  schema: projectSchema,
});

export const collections = {
  projects,
};
