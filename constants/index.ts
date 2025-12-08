export const NAV_LINKS = [
  { id: 1, name: 'Portfolio' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Projects' },
];

export const NAV_ICONS = [
  { id: 1, img: '/icons/wifi.svg' },
  { id: 2, img: '/icons/search.svg' },
  { id: 3, img: '/icons/user.svg' },
  { id: 4, img: '/icons/mode.svg' },
];

export const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

export const DOCK_APPS = [
  { id: 'finder', name: ' Portfolio', icon: 'finder.png', canOpen: true },
  { id: 'safari', name: 'Articles', icon: 'safari.png', canOpen: true },
  { id: 'photos', name: 'Gallery', icon: 'photos.png', canOpen: true },
  { id: 'contact', name: 'Contact', icon: 'contact.png', canOpen: true },
  { id: 'terminal', name: 'Skills', icon: 'terminal.png', canOpen: true },
  { id: 'trash', name: 'Archive', icon: 'trash.png', canOpen: false },
] as const;

export const INITIAL_Z_INDEX = 1000;
export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const TECH_STACK = [
  { category: 'Frontend', items: ['Next.js', 'React.js', 'TypeScript'] },
  { category: 'Mobile', items: ['Flutter'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS'] },
  { category: 'Database', items: ['PostgreSQL', 'Prisma ORM'] },
  { category: 'Dev Tools', items: ['Git', 'GitHub', 'GitLab'] },
] as const;
