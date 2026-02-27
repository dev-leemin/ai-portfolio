'use client'

import { motion } from 'framer-motion'
import { Train, Flame, MapPin, Layers, Building2, ExternalLink, MessageCircleHeart, Dices } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const careerProjects = [
  {
    id: 1,
    title: 'KORAIL ERP - 급여시스템',
    company: '한국철도공사',
    role: '개발자',
    description: '전자정부 프레임워크 기반의 급여 시스템 신규 개발. 급여 계산, 수당 관리, 급여 명세서 등 급여 업무 전반의 화면과 기능을 구현하고 Tibero DB와 연동하여 급여 데이터를 관리했습니다.',
    icon: Train,
    color: 'from-blue-500 to-cyan-500',
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero', 'JavaScript'],
    period: '2021.05 - 2022.04',
    responsibilities: [
      '급여 계산/수당 관리 등 급여 업무 전반 화면 개발',
      'WebSquare 기반 UI 구현 및 사용자 인터랙션 처리',
      'Tibero DB 연동 쿼리 작성 및 데이터 관리',
      '급여 명세서 조회/출력 기능 구현'
    ],
    image: '/projects/korail.png',
  },
  {
    id: 2,
    title: '가스안전공사 차세대 ERP',
    company: '한국가스안전공사',
    role: '개발자',
    description: '기존 ERP 시스템을 차세대 ERP로 전면 마이그레이션하는 프로젝트. 인사-평가 시스템을 주 담당으로 개발하고, 구 시스템의 데이터를 신규 시스템으로 무결성을 유지하며 이관했습니다.',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
    period: '2022.07 - 2023.03',
    responsibilities: [
      '인사-평가 시스템 전체 설계 및 개발 (주 담당)',
      '구 ERP → 차세대 ERP 데이터 마이그레이션 (무결성 보장)',
      '간이결재 시스템 관리 및 유지보수',
      '사용자 권한 관리 체계 구현',
      '재무-회계 모듈 일부 개발 지원'
    ],
    image: '/projects/gas.png',
  },
  {
    id: 3,
    title: 'Zeniel ERP',
    company: 'Zeniel',
    role: '개발자',
    description: '시스템/공통 모듈과 관리회계(경영관리) 시스템을 담당. 사용자/권한/메뉴 관리 등 시스템 공통 기능을 개발하고, 재무회계 데이터를 경영관리 관점으로 가공하여 조회하는 관리회계 시스템을 구축했습니다.',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2023.04 - 2024.07',
    responsibilities: [
      '사용자/권한/메뉴 관리 등 시스템 공통 모듈 개발',
      '관리회계: 재무회계 데이터를 경영관리 관점으로 가공/조회',
      '그룹웨어 연동 (일정, 메일, 게시판 등)',
      '파일 업로드/다운로드 공통 모듈 구현',
      '오류사항 관리 시스템 개발',
      '대사우 시스템 개발'
    ],
    image: '/projects/zeniel.png',
  },
  {
    id: 4,
    title: '노지 HD맵 프로젝트',
    company: '(프로젝트)',
    role: '개발자',
    description: '드론이 촬영한 농지 영상을 업로드하고, 정사 처리하여 하나의 이미지로 합성한 뒤 식생지수(NDVI)를 조회할 수 있는 플랫폼. 시스템 구축부터 DB 관리, 영상 업로드, 식생지수 조회까지 전반을 담당했습니다.',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2024.11 - 2024.12',
    responsibilities: [
      '전체 시스템 아키텍처 설계 및 플랫폼 구축',
      '드론 촬영 영상 업로드 및 관리 기능 개발',
      '정사 처리(Ortho) 후 이미지 합성 연동',
      '식생지수(NDVI) 조회 및 시각화 기능 구현',
      'PostgreSQL 데이터베이스 설계 및 관리'
    ],
    image: null,
  },
  {
    id: 5,
    title: '인천환경공단 ERP',
    company: '인천광역시환경공단',
    role: 'PL (프로젝트 리더)',
    description: 'PL(프로젝트 리더)로서 공통/시스템/인사-평가 분야를 총괄. SSO 연계, 전자결재 연동, 공통 모듈 등 시스템 전반의 아키텍처를 설계하고 팀원들의 개발을 리딩하고 있습니다.',
    icon: Building2,
    color: 'from-teal-500 to-cyan-500',
    tech: ['Nexacro', '전자정부', 'PostgreSQL'],
    period: '2024.07 - 진행중',
    responsibilities: [
      'PL로서 프로젝트 일정 관리 및 개발 총괄',
      'SSO(Single Sign-On) 연계 설계 및 구현',
      'Handy 전자결재 시스템 연동 개발',
      '공통 모듈(코드관리, 로그, 알림 등) 설계/개발',
      '인사-평가 시스템 개발',
      '시스템 관리(사용자, 권한, 메뉴) 구현'
    ],
    image: '/projects/incheon.png',
  },
]

const personalProjects = [
  {
    id: 6,
    title: '취뽀 (JobReady)',
    company: '개인 프로젝트',
    role: '풀스택 개발자',
    description: 'AI 기반 취업 준비 SaaS 플랫폼. Groq LLM을 활용한 AI 모의면접 시스템으로 실전 면접을 대비하고, 자기소개 스크립트 생성기와 이력서/자소서 AI 작성 지원 기능을 제공합니다. NextAuth 기반 소셜 로그인과 사용자별 데이터 관리를 구현했습니다.',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500',
    tech: ['Next.js 16', 'React 19', 'Groq AI', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    period: '2026.01',
    responsibilities: [
      'Groq LLM API 연동 AI 모의면접 시스템 (질문 생성 → 답변 분석 → 피드백)',
      '자기소개 스크립트 자동 생성기 구현',
      '이력서/자소서 AI 작성 지원 및 첨삭 기능',
      '사용자 온보딩 및 프로필 관리 시스템',
      'NextAuth 소셜 로그인 (Google, Kakao)',
      'Prisma ORM + Neon PostgreSQL 서버리스 DB 연동',
      'Vercel 배포 및 운영'
    ],
    image: '/projects/jobready.png',
    url: 'https://job-ready-smlees-projects-96d0b73d.vercel.app',
  },
  {
    id: 7,
    title: '도란도란',
    company: '개인 프로젝트',
    role: '풀스택 개발자',
    description: '성격 유형 테스트 기반 소셜 플랫폼. 직장인 캐릭터 테스트, 점심 취향 테스트 등 다양한 테스트를 제공하고, 방을 생성해 친구를 초대하면 1:1 궁합 분석과 그룹 궁합 랭킹을 확인할 수 있는 소셜 기능을 구현했습니다.',
    icon: MessageCircleHeart,
    color: 'from-pink-500 to-rose-500',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    period: '2026.02',
    responsibilities: [
      '성격 유형 테스트 엔진 설계 및 구현 (직장인 캐릭터, 점심 취향 등)',
      '방 생성 및 친구 초대 시스템 (비밀번호, QR코드, 링크 공유)',
      '1:1 궁합 분석 알고리즘 및 그룹 궁합 랭킹 시스템',
      '유형 분포 차트 시각화 구현',
      '리뷰 및 리액션 시스템 개발',
      'OAuth 소셜 로그인 (Google, Kakao)',
      'Prisma ORM + Neon PostgreSQL 서버리스 DB 연동'
    ],
    image: '/projects/doran.png',
    url: 'https://doran-orcin.vercel.app',
  },
  {
    id: 8,
    title: '내로또 - AI 로또 예측기',
    company: '개인 프로젝트',
    role: '풀스택 개발자',
    description: 'AI 기반 로또 6/45 및 연금복권 720+ 번호 예측 서비스. 논문(arXiv:2403.12836) 기반 CDM 확률 모델과 백테스트 검증 공식을 적용하여 통계적으로 분석된 번호를 추천합니다. 과거 회차 당첨번호와의 비교 검증 기능도 제공합니다.',
    icon: Dices,
    color: 'from-yellow-500 to-orange-500',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'ml-regression', 'Tailwind CSS'],
    period: '2026.02',
    responsibilities: [
      'CDM 확률 모델 기반 번호 예측 시스템 (빈도, 포아송 분포, 트렌드 분석)',
      '전체 회차 역추적 백테스트 검증 시스템 구현',
      '로또 6/45 + 연금복권 720+ 이중 분석 시스템',
      '스마트 랜덤 생성기 (홀짝/고저/합계/번호대 균형 조건)',
      '과거 회차 당첨번호 비교 및 적중률 시각화',
      'Google AdSense 광고 연동 및 수익화',
      'Vercel 배포, SEO 최적화, Google Search Console 등록'
    ],
    image: '/projects/lotto.png',
    url: 'https://lotto-predictor-two.vercel.app',
  },
]

interface Project {
  id: number
  title: string
  company: string
  role: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  tech: string[]
  period: string
  responsibilities: string[]
  image: string | null
  url?: string
}

function ProjectCard({
  project,
  index,
  imageErrors,
  expandedProjects,
  onImageError,
  onToggleExpanded,
  onOpenImage,
}: {
  project: Project
  index: number
  imageErrors: Record<number, boolean>
  expandedProjects: Record<number, boolean>
  onImageError: (id: number) => void
  onToggleExpanded: (id: number) => void
  onOpenImage: (src: string, title: string) => void
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
    >
      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
        >
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>{project.company}</span>
            <span>•</span>
            <span className="text-blue-400">{project.role}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">{project.period}</p>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-sm text-slate-300 mb-4">{project.description}</p>

      {/* 프로젝트 이미지 */}
      <div className="mb-4 h-48 bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden relative group">
        {project.image && !imageErrors[project.id] ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => onImageError(project.id)}
            />
            <button
              onClick={() => onOpenImage(project.image!, project.title)}
              className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <span className="text-white text-sm font-semibold bg-slate-900/80 px-4 py-2 rounded-lg">
                클릭하여 확대
              </span>
            </button>
          </>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-slate-500 text-sm">
              {project.image ? '이미지 로딩 중...' : '이미지 준비중'}
            </p>
          </div>
        )}
      </div>

      {/* 주요 업무 */}
      <div className="mb-4">
        <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">주요 업무</h4>
        <ul className="space-y-1">
          {(expandedProjects[project.id]
            ? project.responsibilities
            : project.responsibilities.slice(0, 3)
          ).map((task, idx) => (
            <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>{task}</span>
            </li>
          ))}
          {project.responsibilities.length > 3 && (
            <li>
              <button
                onClick={() => onToggleExpanded(project.id)}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-1"
              >
                {expandedProjects[project.id]
                  ? '접기'
                  : `+${project.responsibilities.length - 3}개 업무 더보기`}
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* 기술 스택 */}
      <div>
        <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* URL 링크 */}
      {project.url && (
        <div className="mt-4 pt-4 border-t border-slate-700">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            서비스 바로가기
          </a>
        </div>
      )}
    </motion.div>
  )
}

/**
 * 프로젝트 카드 그리드 - 경력 프로젝트 / 개인 프로젝트 분리
 */
export default function BentoGrid() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  const toggleExpanded = (projectId: number) => {
    setExpandedProjects(prev => ({ ...prev, [projectId]: !prev[projectId] }))
  }

  const openImageModal = (src: string, title: string) => {
    setSelectedImage({ src, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      {/* 경력 프로젝트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {careerProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            imageErrors={imageErrors}
            expandedProjects={expandedProjects}
            onImageError={handleImageError}
            onToggleExpanded={toggleExpanded}
            onOpenImage={openImageModal}
          />
        ))}
      </div>

      {/* 개인 프로젝트 섹션 */}
      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">개인 프로젝트</h3>
          <p className="text-slate-400">Next.js & React 기반 풀스택 사이드 프로젝트</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              imageErrors={imageErrors}
              expandedProjects={expandedProjects}
              onImageError={handleImageError}
              onToggleExpanded={toggleExpanded}
              onOpenImage={openImageModal}
            />
          ))}
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-center text-white mt-4 text-lg font-semibold">
              {selectedImage.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
