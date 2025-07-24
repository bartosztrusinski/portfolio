import type { TechnologyKey } from '@/data/technologies';

export type Skill = {
  title: string;
  technologyKeys: TechnologyKey[];
};

export const skills: Skill[] = [
  {
    title: 'Front-End',
    technologyKeys: ['react', 'javascript', 'typescript', 'next', 'astro', 'tailwind', 'shadcnui'],
  },
  {
    title: 'Back-End',
    technologyKeys: ['node', 'express', 'prisma', 'drizzle', 'postgres', 'mongodb'],
  },
  {
    title: 'Tools',
    technologyKeys: ['git', 'webpack', 'zod'],
  },
];
