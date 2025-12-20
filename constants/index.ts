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
  {
    id: 3,
    date: 'Jan 06, 2025',
    title: '다국어를 지원하는 페이지 만들기',
    image: '/images/blog3.png',
    link: 'https://jaerinjaerin.github.io/blog/create-multi-lingual-page',
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
      id: 101,
      name: '🚌 마이루트',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5', // icon poistion inside Finder
      windowPosition: 'top-[34vh] right-20',
      children: [
        {
          id: 1,
          name: '프로젝트 소개.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          subtitle: '지오펜스 기반 장소 도착 알림 애플리케이션 ‘마이루트’',
          image: '/images/jaerin-1.png',
          description: [
            'Overview\n마이루트는 대중교통 출퇴근자를 위한 개인 맞춤형 경로 안내 앱입니다.\n자주 이용하는 출퇴근 경로를 저장하고, GPS 기반 위치 추적과 지오펜스 기술을 활용하여 정류장/역 도착 시 실시간 교통 정보를 푸시 알림으로 제공합니다. ',
            '일정 : 2025.08 ~ 2025.12\n기술 스택 : Flutter, Hive, GoRouter, permission_handler, geolocator\n참여 인원 : 2인(프론트엔드 1인, 기획 1인)\n서비스 : 지오펜스 기반 네비게이션 자동 알림 애플리케이션',
          ],
          description_detail: [
            '- **Naver Local API + Geocode API** 조합으로 **도로명/건물명 혼용 검색** 구현, 주소 검색 **실패율 감소**',
            '- 위치 기반 푸시 알림의 **중복 발송**을 **전역 상태 기반 발송 이력 관리**로 방지, **동일 반경 재진입 시 1회만 발송**',
            '- TextField에서 발생하는 **KeyUpEvent assertion 에러**를 Focus 위젯으로 키보드 이벤트를 래핑하고 **try-catch로 예외를 무시 처**리하여 해결',
            '- 실제 이동 테스트가 어려운 환경에서 **시뮬레이터에 위치 이동 이벤트**를 주입하여 지오펜스 진입 시 푸시 알림이 정상 동작하는지 검증함',
            '- Firbase Google Analaytics 연동 및 iOS App Store 배포',
          ],
        },
        {
          id: 2,
          name: 'myroute.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          position: 'top-41 left-70',
          href: 'https://myroute.bien.ltd/',
        },
        {
          id: 3,
          name: '프로젝트_상세설명.com', //여기에 디테일한 내용 서술 ('/projects')
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'top-6 left-50',
          href: '/project/myroute',
        },
        {
          id: 4,
          name: '마이루트.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          imageUrl: '/images/blog1.jpg',
          position: 'top-40 left-20',
        },
      ],
    },
    {
      id: 102,
      name: '🌎 충남미술사 아카이브',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-40', // icon poistion inside Finder
      windowPosition: 'top-[10vh] left-10',
      children: [
        {
          id: 1,
          name: '프로젝트 소개.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          subtitle: '인터랙티브 지도와 타임라인으로 시각화한 웹 사이트 ‘충남미술사 아카이브‘',
          image: '/images/jaerin-1.png',
          description: [
            'Overview\n충남미술관에서 진행한 개화기(1876년)부터 1990년대까지의 충남 미술사 자료를 디지털화한 아카이브 플랫폼입니다.\n미술단체, 교육기관, 전시공간, 인물 등 4가지 카테고리로 분류된 데이터를 시기별·지역별로 필터링하여 탐색할 수 있으며,\n지도 위에 마커로 시각화하여 지리적 맥락에서 충남 미술사의 흐름을 파악할 수 있습니다.',
            '**일정** : 2025.10 ~ 2025.12\n**기술 스택** : Next.js 15 (App Router), TypeScript, Tailwind CSS, Mapbox GL, Zustand\n**참여 인원** : 2인 (프론트엔드 1인, 기획 1인)\n**서비스** : 충남미술관 미술사 조사 결과물(2021~2024)의 디지털 아카이브 플랫폼',
          ],
          description_detail: [
            '동일 좌표에 마커가 겹치는 문제를 Mapbox GL 클러스터링과 팝업 리스트로 해결, 100개 이상의 데이터를 지도에서 자연스럽게 탐색 가능하도록 개선',
            'Drawer 열림 시 마커가 가려지는 이슈 발견, 뷰포트 감지 커스텀 훅으로 padding offset을 동적 계산하여 flyTo 애니메이션에 적용',
            '개화기(1876년)부터 1990년대까지 120년간의 데이터를 드래그 슬라이더로 탐색하는 타임라인 구현',
            '4가지 카테고리(작가/작품/전시/기관) 필터를 조합한 통합 검색 기능 개발',
            'Lighthouse 성능 최적화로 Performance 점수 52→78점 개선, 초기 로딩 197ms → 94ms 단축 (52% 개선)',
            '클라이언트 요구사항을 기능 명세서로 문서화하고 일정 내 프로젝트 완료',
          ],
        },
        {
          id: 2,
          name: 'chungnam-arthistory.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          position: 'top-41 left-0',
          href: 'https://chungnam-art-history.vercel.app/',
        },
        {
          id: 3,
          name: '프로젝트_상세설명.com',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'bottom-30 right-55',
          href: '/project/chungnam-arthistory',
        },
        {
          id: 4,
          name: '충남미술사.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          imageUrl: '/images/blog1.jpg',
          position: 'top-30 right-20',
        },
      ],
    },
    {
      id: 103,
      name: '🧸 피규어AI',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 right-30',
      windowPosition: 'top-[20vh] left-45',
      children: [
        {
          id: 1,
          name: '프로젝트 소개.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-41 left-0',
          subtitle: 'AI 기반 이미지 생성 및 3D 모델 제작 SaaS 플랫폼 ‘피규어AI‘',
          image: '/images/jaerin-1.png',
          description: [
            'Overview\nFigure AI는 사용자가 업로드한 사진을 기반으로 다양한 스타일의 3D 캐릭터 피규어로 자동 변환해주는 서비스입니다.\n생성된 캐릭터는 AR 환경에서 확인 가능하며, 실제 피규어 제작까지 확장 가능한 콘텐츠 커머스 플랫폼입니다.',
            '**일정** : 2025.03 ~ 2025.08\n**기술 스택** : Next.js 15 (App Router), TypeScript, Three.js, SWR, Next Auth v4, Radix UI\n**참여 인원** : 4인 (기획 1인, 디자인 1인, 백엔드 1인, 프론트엔드 2인)\n**서비스** : 사용자 사진을 기반으로 프롬프트 없이 자동으로 2D/3D 이미지를 생성해주는 AI 기반 구독형 SaaS 플랫폼',
          ],
          description_detail: [
            'Fetch API HTTP 왕복으로 인한 초기 로딩 지연을 서버 컴포넌트에서 DB 직접 접근하여 네트워크 오버헤드 제거, 초기 렌더링 속도 개선 및 사용자 경험 향상',
            '설문 제출 시 Google Sheets 자동 저장 + Discord 실시간 알림으로 기획자가 개발자 도움 없이 데이터 확인, 팀 협업 효율 향상',
            '토스페이먼츠 SDK 인라인 적용으로 페이지 이동 없이 즉시 결제 가능하게 하고, 플랜 변경 시 업그레이드/다운그레이드/예약/빌링키 등 다양한 사용자 환경 분기 처리로 일관된 결제 경험 제공',
            'NextAuth v4 + Prisma로 소셜 로그인(Google/Kakao) 통합 인증 구현, 세션 관리 및 사용자 정보 동기화 및 사용자 경험 향상',
            '브라우저 호환성과 성능을 고려하여 Three.js + React Three Fiber 선택, WebGL 기반으로 모바일에서도 60fps 유지',
          ],
        },
        {
          id: 2,
          name: 'FigureAI.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          position: 'top-5 left-10',
          href: 'https://figureai.app/',
        },
        {
          id: 3,
          name: '프로젝트_상세설명.com',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'bottom-30 right-55',
          href: '/project/figure-ai',
        },
        {
          id: 4,
          name: '피규어AI.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          imageUrl: '/images/blog1.jpg',
          position: 'top-30 right-20',
        },
      ],
    },
    {
      id: 104,
      name: '🗺️ S+ Certification Quiz',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-40 left-5',
      windowPosition: 'top-[50vh] left-20',
      children: [
        {
          id: 1,
          name: '프로젝트 소개.txt', // 간단하게 내가 한 일
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-41 left-0',
          subtitle: '삼성 S+ 다국어 지원(i18n) 게이미피케이션 퀴즈 플랫폼',
          image: '/images/jaerin-1.png',
          description: [
            'Overview\n전 세계에 분포한 삼성 플러스 판매자들은 신제품이 출시될 때마다 제품 지식에 대한 인증을 통과하고 Expert 뱃지를 획득해야 합니다.\n이 필수 학습 과정의 참여도와 효과를 높이기 위해, 퀴즈 형식의 gamification을 적용한 인증 시스템을 개발했습니다.\n50개 이상의 언어를 지원하며, 브라우저의 언어를 파악하여 매칭되는 언어를 지원합니다.',
            '**일정** : 2024.09 ~ 2025.01\n**기술 스택** : Next.js 14(App Router), TypeScript, Radix UI, Motion, Lottie, AWS SES, next-intl, Sentry, Google Analytics\n**참여 인원** : 6인(프론트엔드 2인, 백엔드 2인, 기획 2인)\n**서비스** : 삼성 S+ 사용자를 위한 50개국 언어 지원 게이미피케이션 인증 퀴즈 플랫폼',
          ],
          description_detail: [
            '**다중 인증 타입(Sumtotal/Guest)** 통합 세션을 **JWT + Prisma Adapter**로 구현, **24시간 자동 갱신**으로 세션 만료 이탈 감소',
            '**Accept-Language 헤더 파싱**으로 사용자 언어를 자동 감지하고, **폴백 매칭 알고리즘**으로 미지원 언어 처리 (**50개국 언어 대응**)',
            '**Sentry 에러 모니터링** 도입으로 프로덕션 환경의 런타임 에러를 **실시간 추적**, **에러 원인 파악 시간 단축** 및 **평균 대응 시간 30% 감소**',
            '**AWS SES + next-intl**로 **50개국 언어별** 이메일 템플릿 구축, 퀴즈 완료/배지 획득 시 **인증 메일 자동 발송**',
            '**Google Analytics 이벤트 트래킹**으로 퀴즈 단계별 **이탈률과 완료율 분석**, **데이터 기반**으로 UX 개선점 도출 및 **기획팀과 공유**',
          ],
        },
        {
          id: 2,
          name: 'S+Quiz.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          position: 'top-5 left-10',
          href: 'https://quiz.samsungplus.net/s25/login',
        },
        {
          id: 3,
          name: '프로젝트_상세설명.com',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'bottom-30 right-55',
          href: '/project/s-plus-quiz',
        },
        {
          id: 4,
          name: 'S+Quiz.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          imageUrl: '/images/blog1.jpg',
          position: 'top-30 right-20',
        },
      ],
    },
    {
      id: 105,
      name: '🔧 Interactive Protfolio',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-40 left-45',
      windowPosition: 'top-[60vh] right-30',
      children: [
        {
          id: 1,
          name: '프로젝트 소개.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-41 left-0',
          subtitle: '인터랙티브 포트폴리오',
          image: '/images/jaerin-1.png',
          description: [
            'Overview\n개인 포트폴리오를 새롭게 리뉴얼하여, GSAP를 활용한 드래그 인터랙션과 Tailwind CSS 통한 부드러운 애니메이션을 구현했습니다. 반응형 웹사이트로 iOS의 모바일과 데스크탑의 스타일을 구현하였으며, 드래그 기반 애니메이션을 통해 몰입감 있는 경험을 제공합니다.',
            '**일정** : 2025.11 ~ 2025.12\n**기술 스택** : Next.js 15(App Router), TypeScript, GSAP, Tailwind\n**참여 인원** : 1인',
          ],
          description_detail: [],
        },
        {
          id: 3,
          name: '프로젝트_상세설명.com',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          position: 'bottom-30 right-55',
          href: '/project/interactive-portfolio',
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
      subtitle: '안녕하세요. 디테일과 간결함에 주의를 기울이는 개발자 이재린입니다.',
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
