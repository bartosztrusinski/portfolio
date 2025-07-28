type Technology = {
  name: string;
  logo: string;
  class?: string;
};

export type TechnologyKey = keyof typeof _technologies;

const _technologies = {
  git: { name: 'Git', logo: 'logos:git-icon' },
  react: { name: 'React', logo: 'logos:react' },
  next: { name: 'Next.js', logo: 'logos:nextjs-icon' },
  typescript: { name: 'TypeScript', logo: 'logos:typescript-icon' },
  javascript: { name: 'JavaScript', logo: 'logos:javascript' },
  tailwind: { name: 'Tailwind CSS', logo: 'logos:tailwindcss-icon' },
  astro: { name: 'Astro', logo: 'logos:astro-icon' },
  solid: { name: 'SolidJS', logo: 'logos:solidjs-icon' },
  ejs: { name: 'EJS', logo: 'vscode-icons:file-type-ejs', class: 'size-5' },
  node: { name: 'Node.js', logo: 'logos:nodejs-icon' },
  express: { name: 'Express.js', logo: 'simple-icons:express' },
  mongodb: {
    name: 'MongoDB',
    logo: 'logos:mongodb-icon',
    class: 'bg-black size-5 p-1 rounded-full',
  },
  mongoose: { name: 'Mongoose ODM', logo: 'simple-icons:mongoose', class: 'text-[#880000] size-5' },
  redis: { name: 'Redis', logo: 'logos:redis' },
  postgres: { name: 'PostgreSQL', logo: 'logos:postgresql' },
  prisma: { name: 'Prisma ORM', logo: 'simple-icons:prisma', class: 'text-[#123b51]' },
  zod: { name: 'Zod', logo: 'logos:zod' },
  jwt: { name: 'JWT', logo: 'logos:jwt-icon' },
  axios: { name: 'Axios', logo: 'simple-icons:axios', class: 'text-[#5a29e4]' },
  swc: { name: 'SWC', logo: 'logos:swc' },
  tanStackQuery: { name: 'TanStack Query', logo: 'tanstack' },
  tanStackRouter: { name: 'TanStack Router', logo: 'tanstack' },
  reactHookForm: {
    name: 'React Hook Form',
    logo: 'simple-icons:reacthookform',
    class: 'bg-[#ec5990] rounded-sm p-[3px] text-white stroke-white',
  },
  reactHotToast: { name: 'React Hot Toast', logo: 'logos:react' },
  drizzle: { name: 'Drizzle ORM', logo: 'drizzle' },
  resend: { name: 'Resend', logo: 'resend', class: 'bg-black rounded' },
  reactEmail: { name: 'React Email', logo: 'react-email' },
  otpAuth: { name: 'OTPAuth', logo: 'otp-auth' },
  cloudinary: { name: 'Cloudinary', logo: 'logos:cloudinary-icon' },
  multer: { name: 'Multer', logo: 'simple-icons:express' },
  dateFns: { name: 'date-fns', logo: 'simple-icons:datefns', class: 'text-[#7b135b]' },
  bootstrap: { name: 'Bootstrap', logo: 'logos:bootstrap' },
  mapbox: { name: 'Mapbox', logo: 'simple-icons:mapbox' },
  joi: { name: 'Joi', logo: 'joi' },
  styledComponents: { name: 'Styled Components', logo: 'devicon:styledcomponents' },
  sass: { name: 'Sass', logo: 'logos:sass' },
  shadcnui: {
    name: 'Shadcn/UI',
    logo: 'simple-icons:shadcnui',
    class: 'bg-black text-white rounded-sm p-1',
  },
  vite: { name: 'Vite', logo: 'logos:vitejs' },
  css: { name: 'CSS', logo: 'simple-icons:css', class: 'text-[#663399]' },
  markdown: { name: 'Markdown', logo: 'logos:markdown' },
  daisy: { name: 'daisyUI', logo: 'logos:daisyui-icon' },
  preact: { name: 'Preact', logo: 'logos:preact' },
  authjs: { name: 'Auth.js', logo: 'authjs' },
  webpack: { name: 'Webpack', logo: 'logos:webpack' },
  passport: { name: 'Passport', logo: 'logos:passport' },
  d3: { name: 'D3.js', logo: 'logos:d3' },
  topojson: { name: 'TopoJSON', logo: 'logos:json' },
  nextIntl: { name: 'next-intl', logo: 'next-intl' },
} as const;

export const technologyKeys = Object.keys(_technologies) as TechnologyKey[];
export const technologies: Record<TechnologyKey, Technology> = _technologies;
