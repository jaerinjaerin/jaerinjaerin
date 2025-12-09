export const NAV_LINKS = [
  { id: 1, name: 'Projects', type: 'finder' },
  { id: 2, name: 'Contact', type: 'contact' },
  { id: 3, name: 'Resume', type: 'resume' },
] as const;

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
  { id: 'finder', name: 'Projects', icon: 'finder.png', canOpen: true },
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

export const BLOG_POSTS = [
  {
    id: 1,
    date: 'Nov 28, 2025',
    title: '웹 사이트 최적화와 성능 개선, 꼭 해야하나요?',
    image: '/images/blog1.jpg',
    link: 'https://jaerinjaerin.github.io/blog/optimize-our-website-and-improve-our-performance',
  },
  {
    id: 2,
    date: 'Aug 23, 2025',
    title: '허점이 없는 UI로 UX를 향상시키기',
    image: '/images/blog2.png',
    link: 'https://jaerinjaerin.github.io/blog/improve-ux-with-ui-without-loopholes',
  },
] as const;

const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: 'Work',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // projects
    {
      id: 5,
      name: 'Nike Ecommerce Website Application',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5', // icon poistion inside Finder
      windowPoistion: 'top-[15vh] right-20',
      children: [
        {
          id: 1,
          name: 'Nike Project.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          subtitle: '나이키 프로젝트임. 근데 내가 만든건 아님',
          description: ['The Nicke eCommerce webdite is ', 'Instead of a simple online store'],
        },
        {
          id: 2,
          name: 'Nike.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          position: 'top-10 left-100',
          href: 'https://www.naver.com',
        },
        {
          id: 3,
          name: 'More Detail.fig', //여기에 디테일한 내용 서술 ('/projects')
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'top-10 left-50',
          href: '/projects/1',
        },
        {
          id: 4,
          name: 'nike.png', //여기에 디테일한 내용 서술 ('/projects')
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          imageUrl: '/images/blog1.jpg',
          position: 'top-40 left-50',
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: 'About me',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [],
};

const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: 'Resume',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
      poistion: 'top-0 left-0',
    },
  ],
};

export const LOCATIONS = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};
