type Link = {
  name: string;
  url: string;
  icon: string;
};

export const socialLinks: Link[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/bartosztrusinski',
    icon: 'simple-icons:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bartosz-trusinski',
    icon: 'simple-icons:linkedin',
  },
  {
    name: 'CV',
    url: '/bartosz-trusinski-cv.pdf',
    icon: 'lucide:file-user',
  },
  {
    name: 'bartosz@trusinski.dev',
    url: 'mailto:bartosz@trusinski.dev',
    icon: 'lucide:mail',
  },
];
