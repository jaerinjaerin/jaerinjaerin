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
  { id: 'photos', name: 'Photos', icon: 'photos.png', canOpen: true },
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

export const SOCIALS = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    bg: '#1179BA',
    link: 'https://www.github.com/jaerinjaerin',
  },
  {
    id: 2,
    text: 'Blog',
    icon: '/icons/atom.svg',
    bg: '#F9B343',
    link: 'https://jaerinjaerin.github.io/',
  },
  {
    id: 3,
    text: 'Mail',
    icon: '/icons/mail.svg',
    bg: '#FC5C4D',
    link: 'mailto:jrlee_0922@naver.com',
  },
  {
    id: 4,
    text: 'Instagram',
    icon: '/icons/instagram.svg',
    bg: '#923275',
    link: 'https://www.instagram.com/lee_jaell/',
  },
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

export const PHOTOS = [
  { id: 1, image: '/images/blog1.jpg' },
  { id: 2, image: '/images/blog1.jpg' },
  { id: 3, image: '/images/blog1.jpg' },
  { id: 4, image: '/images/blog1.jpg' },
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
      windowPoistion: 'top-[30vh] right-20',
      children: [
        {
          id: 1,
          name: 'Nike Project.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          subtitle: '나이키 프로젝트임. 근데 내가 만든건 아님',
          description: [
            'The Nicke eCommerce webdite is ',
            'Instead of a simple online store',
          ],
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
  children: [
    {
      id: 1,
      name: 'about-me.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-10 left-5',
      subtitle:
        '안녕하세요. 디테일과 간결함에 주의를 기울이는 개발자 이재린입니다.',
      image: '/images/jaerin-1.png',
      description: [
        '3년간 SI 환경에서 다양한 프론트엔드 프로젝트를 경험하며 성장해온 개발자입니다. Next.js 기반의 대시보드, 관리자 페이지, 기업 웹사이트 등 업종과 요구사항이 다른 10여 개 프로젝트의 프론트엔드를 담당했습니다.',
        "코드를 작성할 때 가장 중요하게 생각하는 건 '사용자가 막히는 지점이 없는가'입니다. 로딩 상태 하나, 에러 메시지 하나도 사용자 경험의 빈틈이 될 수 있다고 믿기에, 엣지 케이스까지 고려한 견고한 UI 구현에 집중합니다.",
        '빠르게 변화하는 클라이언트 요구사항 속에서도 일정을 지키면서 품질을 유지하는 법을 배웠고, 이제는 단순히 화면을 구현하는 것을 넘어 성능 최적화와 유지보수성까지 고려한 설계를 고민합니다.',
      ],
    },
    {
      id: 2,
      name: 'certificates.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-20 left-35',
      imageUrl: '/images/certificates.png',
    },
  ],
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
      position: 'top-15 right-35',
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: 'trash',
  name: 'Trash',
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-18',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash-portfolio.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-26 right-30',
      imageUrl: '/images/trash-2.png',
    },
  ],
};

export const LOCATIONS = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
