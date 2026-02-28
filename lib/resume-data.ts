// 포트폴리오 & 이력서 공유 데이터

export interface PersonalInfo {
  name: string
  nameEn: string
  role: string
  currentPosition: string
  experience: string
  email: string
  github: string
  certification: string
  certBody: string
}

export interface CareerExperience {
  company: string
  title: string
  role: string
  type: '공공기관' | '정부용역' | '민간'
  team: string
  period: string
  description: string[]
  tech: string[]
}

export interface CareerProject {
  id: number
  title: string
  company: string
  role: string
  type: string
  team: string
  description: string
  tech: string[]
  period: string
  responsibilities: string[]
  challenge: string
  result: string
  image: string | null
}

export interface PersonalProject {
  id: number
  title: string
  description: string
  tech: string[]
  challenge: string
  image: string | null
  url?: string
}

export interface TechCategory {
  category: string
  skills: { name: string; experience: string }[]
}

export const personalInfo: PersonalInfo = {
  name: '이상민',
  nameEn: 'sm.lee',
  role: 'ERP 전문 개발자',
  currentPosition: '인천환경공단 ERP PL(프로젝트 리더) / 과장',
  experience: '4년+',
  email: 'leemin-dev@gmail.com',
  github: 'https://github.com/dev-leemin',
  certification: '정보처리기사',
  certBody: '한국산업인력공단',
}

export const experiences: CareerExperience[] = [
  {
    company: '인천환경공단',
    title: '인천환경공단 ERP',
    role: '과장 / PL',
    type: '공공기관',
    team: '9명',
    period: '2025.07 - 현재',
    description: [
      'PL로서 9명 팀 프로젝트 일정 관리 및 개발 총괄',
      '공통 모듈 전반 — 프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, Report, SSO',
      'Nexacro 서버 구성 및 PostgreSQL pg_dump/pg_basebackup 백업 체계 구현',
      'WebSocket 활용 실시간 알림 시스템 구현',
      '인사-평가 — 근무/다면/개인/부서평가, KPI, 성과급 계산',
      '조직관리/사업소관리/회계코드관리 통합 프로세스 설계 진행중',
    ],
    tech: ['Nexacro', '전자정부', 'PostgreSQL', 'WebSocket'],
  },
  {
    company: '노지 HD Map',
    title: '노지 HD맵 프로젝트',
    role: '과장',
    type: '정부용역',
    team: '2명',
    period: '2024.11 - 2024.12',
    description: [
      'OpenStreetMap 활용 — 정사 이미지를 레이어로 올려 지도 시각화',
      '드론 촬영 영상 업로드 및 관리 기능 개발',
      '정사 처리 API — 건바이건 → 병행처리로 처리 시간 대폭 단축',
      '식생지수(NDVI) 조회 및 시각화 기능 구현',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0', 'OpenStreetMap'],
  },
  {
    company: 'Zeniel',
    title: 'Zeniel ERP',
    role: '대리/과장',
    type: '민간',
    team: '8명',
    period: '2023.04 - 2024.07',
    description: [
      '공통 모듈 전반 — 프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, PostgreSQL 최초 구현',
      '급여 프로시저 튜닝 — 3분 쿼리 → 12초로 성능 개선',
      '영업관리 — 매출/매입, 세금계산서 연동, 거래처·현장 관리',
      '관리회계 시스템 구축 — 수기 관리 → 자동화, 차트 시각화',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
  },
  {
    company: '한국가스안전공사',
    title: '가스안전공사 차세대 ERP',
    role: '사원/대리',
    type: '공공기관',
    team: '5명',
    period: '2022.07 - 2023.03',
    description: [
      '인사-평가 시스템 전체 설계 및 개발 (주 담당)',
      '회계 전표처리 — 환율 조회, 전표 로직, 예산통제 공통 함수 구현',
      '기존 전 DB 데이터 마이그레이션 (프로시저)',
      '공통팀 이탈 후 내부결제 로직 재설계',
      'HR 조기 완료 → 회계·공통 파트까지 지원',
    ],
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
  },
  {
    company: '한국철도공사',
    title: 'KORAIL ERP - 급여시스템',
    role: '신입사원',
    type: '공공기관',
    team: '4명',
    period: '2021.05 - 2022.04',
    description: [
      'HR 급여 파트 전담 — 급여 계산, 수당, 급여 명세서',
      '소득세법·급여계산법 학습 후 발령·징계 연동 급여 로직 설계',
      'SMTP 기반 급여 메일 발송 시스템 구현',
      'WebSquare UI 구현 및 Tibero DB 연동',
    ],
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero'],
  },
]

export const careerProjects: CareerProject[] = [
  {
    id: 1,
    title: 'KORAIL ERP - 급여시스템',
    company: '한국철도공사',
    role: '신입사원 (팀원)',
    type: '공공기관',
    team: '4명',
    description:
      '전자정부 프레임워크 기반 급여 시스템 신규 개발. HR 중 급여 파트를 전담하여 소득세법·급여계산법을 학습한 뒤 발령·징계 등 급여 계산 로직을 설계·구현했습니다. SMTP를 활용한 급여 메일 발송 기능도 개발했습니다.',
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero', 'JavaScript'],
    period: '2021.05 - 2022.04',
    responsibilities: [
      'HR 급여 파트 전담 — 급여 계산, 수당 관리, 급여 명세서 전반 개발',
      '소득세법·급여계산법 학습 후 발령·징계 연동 급여 로직 설계',
      'SMTP 기반 급여 메일 발송 시스템 구현',
      'WebSquare 기반 UI 구현 및 Tibero DB 연동',
    ],
    challenge: '신입사원으로 소득세법·급여계산 지식이 전무한 상태에서 로직 설계에 난항 → 세법 학습 후 고객사 급여 체계에 맞춰 개발 완료',
    result: '첫 프로젝트 이상 없이 완료',
    image: '/projects/korail.png',
  },
  {
    id: 2,
    title: '가스안전공사 차세대 ERP',
    company: '한국가스안전공사',
    role: '사원/대리 (팀원)',
    type: '공공기관',
    team: '5명',
    description:
      '기존 ERP를 차세대 ERP로 전면 마이그레이션. 인사-평가 파트 및 회계 전표처리를 담당하고, 예산통제 공통 로직을 단일 함수로 통합 구현했습니다. HR 파트 조기 완료 후 회계·공통 파트까지 지원하여 프로젝트를 마무리했습니다.',
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
    period: '2022.07 - 2023.03',
    responsibilities: [
      '인사-평가 시스템 전체 설계 및 개발 (주 담당)',
      '회계 전표처리 업무 담당 — 환율 조회, 전표 로직 구현',
      '기존 전 DB 데이터 마이그레이션 (프로시저 실행)',
      '예산통제 공통 로직 구현 — 각 전표별 개별 통제 → 단일 함수로 통합',
      '부서조회 권한 체계 신규 구현 및 메뉴별 권한 적용',
      '공통팀 이탈 후 내부결제 로직 문제 발견 → 재설계',
    ],
    challenge: '회계 지식 전무 → 업무 파트너 협업으로 전표·예산통제 구현 / 공통팀 이탈 → 내부결제 로직 재설계',
    result: 'HR 파트 조기 완료 후 회계·공통 파트까지 지원하여 전체 프로젝트 완료',
    image: '/projects/gas.png',
  },
  {
    id: 3,
    title: 'Zeniel ERP',
    company: 'Zeniel',
    role: '대리/과장',
    type: '민간',
    team: '8명',
    description:
      '프로젝트 초기부터 공통 모듈 전반(프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, PostgreSQL 최초 구현)을 담당. 급여 프로시저 튜닝(3분→12초), 영업관리, 관리회계 시스템을 구축하고 약 10,000명 사용자 대상으로 서비스했습니다.',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2023.04 - 2024.07',
    responsibilities: [
      '공통 모듈 전반 구현 — 프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, PostgreSQL 최초 구현',
      '급여 프로시저 튜닝 — 3분 쿼리 → 12초로 성능 개선',
      '영업관리 파트 — 매출/매입, 세금계산서 연동, 거래처·현장 관리',
      '관리회계 시스템 구축 — 수기 관리 → 자동화, 차트 시각화',
      '그룹웨어 연동 (일정, 메일, 게시판 등)',
    ],
    challenge: '인력회사 특성상 독자적 업무 방식 → 고객사 담당자와 논의하며 관리회계 자동화 / 변동성 높은 데이터 차트 시각화',
    result: '사용자 약 10,000명 대상 이상 없이 구현 완료',
    image: '/projects/zeniel.png',
  },
  {
    id: 4,
    title: '노지 HD맵 프로젝트',
    company: '노지 HD Map',
    role: '과장',
    type: '정부용역',
    team: '2명',
    description:
      'OpenStreetMap 위에 드론 촬영 농지 영상을 정사 처리하여 레이어로 올리고 식생지수(NDVI)를 조회하는 플랫폼. 영상 정사 API의 건바이건 처리를 병행처리로 전환하여 처리 시간을 대폭 단축했습니다.',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0', 'OpenStreetMap'],
    period: '2024.11 - 2024.12',
    responsibilities: [
      'OpenStreetMap 활용 — 정사 이미지를 레이어로 올려 지도 시각화',
      '드론 촬영 영상 업로드 및 관리 기능 개발',
      '정사 처리(Ortho) API 연동 — 건바이건 → 병행처리로 처리 시간 대폭 단축',
      '식생지수(NDVI) 조회 및 시각화 기능 구현',
      'PostgreSQL 데이터베이스 설계 및 관리',
    ],
    challenge: 'Map/Layer 지식 부족 → 나라 지원 API 사용 중 문제 발견 → 긴급 수정 / 영상 정사 API 건바이건 처리 → 병행처리로 전환',
    result: '짧은 기간의 프로젝트였지만 발표까지 이상 없이 완료',
    image: null,
  },
  {
    id: 5,
    title: '인천환경공단 ERP',
    company: '인천환경공단',
    role: '과장 / PL (프로젝트 리더)',
    type: '공공기관',
    team: '9명',
    description:
      'PL로서 9명 팀을 이끌고 공통 모듈 전반(프레임, 권한, SSO, 전자결재, Report, PostgreSQL 백업 체계)을 구축. WebSocket 알림, 근무·다면·개인·부서평가, KPI, 성과급 계산까지 인사-평가 시스템 전반을 개발하고 있습니다.',
    tech: ['Nexacro', '전자정부', 'PostgreSQL', 'WebSocket'],
    period: '2025.07 - 진행중',
    responsibilities: [
      'PL로서 9명 팀 프로젝트 일정 관리 및 개발 총괄',
      '공통 모듈 전반 — 프레임, 권한, 로그인, 메뉴, 대시보드, 전자결재, Report, SSO',
      'Nexacro 서버 구성 및 PostgreSQL pg_dump/pg_basebackup 백업 체계 구현',
      'WebSocket 활용 실시간 알림 시스템 구현',
      '인사-평가 — 근무평가, 다면평가, 개인평가, 부서평가, KPI, 성과급 계산',
      '조직관리/사업소관리/회계코드관리 통합 프로세스 설계 진행중',
    ],
    challenge: '조직관리·사업소관리·회계코드관리가 따로따로 구현 → 권한·조직도와 엮여 통합 프로세스 구현 진행중',
    result: '현재 진행중',
    image: '/projects/incheon.png',
  },
]

export const personalProjects: PersonalProject[] = [
  {
    id: 6,
    title: '취뽀 (JobReady)',
    description:
      'AI 기반 취업 준비 올인원 플랫폼. Claude API 연동 모의면접(기술/인성/경험/종합), 이력서·자소서 AI 생성, 포트폴리오 코드 분석, 맞춤형 스킬 로드맵 등 6개 핵심 AI 기능을 구현. NextAuth v5 멀티 OAuth, 미들웨어 보안(Rate Limiting, Bot 탐지, CSRF), 무료/Pro SaaS 모델까지 단독 설계·개발·배포했습니다.',
    tech: ['Next.js 16', 'React 19', 'Claude API', 'NextAuth v5', 'Prisma', 'PostgreSQL'],
    challenge: 'Groq AI 한국어 품질 이슈 → Claude API로 전면 마이그레이션 / AdSense CSP 충돌 → 도메인 선별 허용 + 쿠키 동의 배너',
    image: '/projects/jobready.png',
    url: 'https://job-ready-smlees-projects-96d0b73d.vercel.app',
  },
  {
    id: 7,
    title: '도란도란',
    description:
      '15종 심리테스트 엔진, 그룹 테스트(방 생성·참여·실시간 결과 비교), 리뷰·좋아요, 통계 시각화를 제공하는 소셜 플랫폼. Neon DB 콜드 스타트를 WebSocket 드라이버 + CDN 캐싱으로 5초→0.4초로 단축했습니다.',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'Neon PostgreSQL', 'NextAuth'],
    challenge: 'Prisma 커스텀 output 경로 Vercel 번들러 충돌 → 기본 경로 전환 / Neon 콜드 스타트 5초 → 0.4초',
    image: '/projects/doran.png',
    url: 'https://doran-orcin.vercel.app',
  },
  {
    id: 8,
    title: '내로또 - AI 로또 예측기',
    description:
      '논문(arXiv:2403.12836) 기반 CDM 확률 모델로 로또 6/45·연금복권 720+ 번호를 예측하는 서비스. 스마트 랜덤 생성기(홀짝/고저/합계/번호대 필터), 백테스트 역검증, 패턴 분석 대시보드를 제공합니다. SEO 최적화 및 AdSense 수익화 파이프라인도 구축했습니다.',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'Neon PostgreSQL', 'ml-regression'],
    challenge: 'Neon DB 콜드 스타트 5초 → WebSocket 드라이버로 1초 미만 / PC 단일 컬럼 → 2단 그리드 레이아웃 개선',
    image: '/projects/lotto.png',
    url: 'https://lotto-predictor-two.vercel.app',
  },
]

export const techCategories: TechCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'WebSquare SP5', experience: '4년' },
      { name: 'Nexacro', experience: '2년' },
      { name: 'JavaScript', experience: '4년' },
      { name: 'Next.js / React', experience: '학습중' },
      { name: 'TypeScript', experience: '학습중' },
      { name: 'Tailwind CSS', experience: '학습중' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', experience: '4년' },
      { name: '전자정부 프레임워크', experience: '4년' },
      { name: 'PowerMDD', experience: '1년' },
      { name: 'Prisma ORM', experience: '학습중' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', experience: '3년' },
      { name: 'Oracle', experience: '3년' },
      { name: 'Tibero', experience: '1년' },
      { name: 'Neon Serverless', experience: '학습중' },
    ],
  },
  {
    category: 'Integration',
    skills: [
      { name: 'SSO 연계', experience: '1년' },
      { name: '전자결재 시스템', experience: '2년' },
      { name: '그룹웨어 연동', experience: '1년' },
    ],
  },
  {
    category: 'Server & Infra',
    skills: [
      { name: 'Nginx', experience: '3년' },
      { name: 'Tomcat', experience: '4년' },
      { name: 'Apache', experience: '2년' },
      { name: 'Vercel', experience: '학습중' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', experience: '4년' },
      { name: 'JMeter', experience: '2년' },
      { name: 'AI/ML (Groq, Claude)', experience: '학습중' },
    ],
  },
]
