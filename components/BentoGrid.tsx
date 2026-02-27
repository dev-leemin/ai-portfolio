'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const careerProjects = [
  {
    id: 1,
    title: 'KORAIL ERP - 급여시스템',
    company: '한국철도공사',
    role: '개발자',
    description:
      '전자정부 프레임워크 기반의 급여 시스템 신규 개발. 급여 계산, 수당 관리, 급여 명세서 등 급여 업무 전반의 화면과 기능을 구현하고 Tibero DB와 연동하여 급여 데이터를 관리했습니다.',
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero', 'JavaScript'],
    period: '2021.05 - 2022.04',
    responsibilities: [
      '급여 계산/수당 관리 등 급여 업무 전반 화면 개발',
      'WebSquare 기반 UI 구현 및 사용자 인터랙션 처리',
      'Tibero DB 연동 쿼리 작성 및 데이터 관리',
      '급여 명세서 조회/출력 기능 구현',
    ],
    image: '/projects/korail.png',
  },
  {
    id: 2,
    title: '가스안전공사 차세대 ERP',
    company: '한국가스안전공사',
    role: '개발자',
    description:
      '기존 ERP 시스템을 차세대 ERP로 전면 마이그레이션하는 프로젝트. 인사-평가 시스템을 주 담당으로 개발하고, 구 시스템의 데이터를 신규 시스템으로 무결성을 유지하며 이관했습니다.',
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
    period: '2022.07 - 2023.03',
    responsibilities: [
      '인사-평가 시스템 전체 설계 및 개발 (주 담당)',
      '구 ERP → 차세대 ERP 데이터 마이그레이션 (무결성 보장)',
      '간이결재 시스템 관리 및 유지보수',
      '사용자 권한 관리 체계 구현',
      '재무-회계 모듈 일부 개발 지원',
    ],
    image: '/projects/gas.png',
  },
  {
    id: 3,
    title: 'Zeniel ERP',
    company: 'Zeniel',
    role: '개발자',
    description:
      '시스템/공통 모듈과 관리회계(경영관리) 시스템을 담당. 사용자/권한/메뉴 관리 등 시스템 공통 기능을 개발하고, 재무회계 데이터를 경영관리 관점으로 가공하여 조회하는 관리회계 시스템을 구축했습니다.',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2023.04 - 2024.07',
    responsibilities: [
      '사용자/권한/메뉴 관리 등 시스템 공통 모듈 개발',
      '관리회계: 재무회계 데이터를 경영관리 관점으로 가공/조회',
      '그룹웨어 연동 (일정, 메일, 게시판 등)',
      '파일 업로드/다운로드 공통 모듈 구현',
      '오류사항 관리 시스템 개발',
      '대사우 시스템 개발',
    ],
    image: '/projects/zeniel.png',
  },
  {
    id: 4,
    title: '노지 HD맵 프로젝트',
    company: '노지 HD Map',
    role: '개발자',
    description:
      '드론이 촬영한 농지 영상을 업로드하고, 정사 처리하여 하나의 이미지로 합성한 뒤 식생지수(NDVI)를 조회할 수 있는 플랫폼. 시스템 구축부터 DB 관리, 영상 업로드, 식생지수 조회까지 전반을 담당했습니다.',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2024.11 - 2024.12',
    responsibilities: [
      '전체 시스템 아키텍처 설계 및 플랫폼 구축',
      '드론 촬영 영상 업로드 및 관리 기능 개발',
      '정사 처리(Ortho) 후 이미지 합성 연동',
      '식생지수(NDVI) 조회 및 시각화 기능 구현',
      'PostgreSQL 데이터베이스 설계 및 관리',
    ],
    image: null,
  },
  {
    id: 5,
    title: '인천환경공단 ERP',
    company: '인천광역시환경공단',
    role: 'PL (프로젝트 리더)',
    description:
      'PL(프로젝트 리더)로서 공통/시스템/인사-평가 분야를 총괄. SSO 연계, 전자결재 연동, 공통 모듈 등 시스템 전반의 아키텍처를 설계하고 팀원들의 개발을 리딩하고 있습니다.',
    tech: ['Nexacro', '전자정부', 'PostgreSQL'],
    period: '2024.07 - 진행중',
    responsibilities: [
      'PL로서 프로젝트 일정 관리 및 개발 총괄',
      'SSO(Single Sign-On) 연계 설계 및 구현',
      'Handy 전자결재 시스템 연동 개발',
      '공통 모듈(코드관리, 로그, 알림 등) 설계/개발',
      '인사-평가 시스템 개발',
      '시스템 관리(사용자, 권한, 메뉴) 구현',
    ],
    image: '/projects/incheon.png',
  },
]

const personalProjects = [
  {
    id: 6,
    title: '취뽀 (JobReady)',
    description:
      'AI 기반 취업 준비 SaaS 플랫폼. Groq LLM을 활용한 AI 모의면접 시스템으로 실전 면접을 대비하고, 자기소개 스크립트 생성기와 이력서/자소서 AI 작성 지원 기능을 제공합니다.',
    tech: ['Next.js 16', 'React 19', 'Groq AI', 'Prisma', 'PostgreSQL', 'NextAuth'],
    image: '/projects/jobready.png',
    url: 'https://job-ready-smlees-projects-96d0b73d.vercel.app',
  },
  {
    id: 7,
    title: '도란도란',
    description:
      '성격 유형 테스트 기반 소셜 플랫폼. 직장인 캐릭터 테스트, 점심 취향 테스트 등 다양한 테스트를 제공하고, 방을 생성해 친구를 초대하면 1:1 궁합 분석과 그룹 궁합 랭킹을 확인할 수 있습니다.',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'NextAuth'],
    image: '/projects/doran.png',
    url: 'https://doran-orcin.vercel.app',
  },
  {
    id: 8,
    title: '내로또 - AI 로또 예측기',
    description:
      'AI 기반 로또 6/45 및 연금복권 720+ 번호 예측 서비스. 논문 기반 CDM 확률 모델과 백테스트 검증 공식을 적용하여 통계적으로 분석된 번호를 추천합니다.',
    tech: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'ml-regression'],
    image: '/projects/lotto.png',
    url: 'https://lotto-predictor-two.vercel.app',
  },
]

interface CareerProject {
  id: number
  title: string
  company: string
  role: string
  description: string
  tech: string[]
  period: string
  responsibilities: string[]
  image: string | null
}

function FeaturedProject({
  project,
  index,
  reversed,
}: {
  project: CareerProject
  index: number
  reversed: boolean
}) {
  const [imgError, setImgError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative grid md:grid-cols-12 gap-2 items-center mb-24 last:mb-0"
      >
        {/* Image */}
        <div
          className={`md:col-span-7 relative ${
            reversed ? 'md:col-start-6 md:row-start-1' : ''
          }`}
        >
          <div
            className="relative aspect-video bg-navy-light rounded overflow-hidden group cursor-pointer"
            onClick={() => {
              if (project.image && !imgError) setSelectedImage(project.image)
            }}
          >
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
            {project.image && !imgError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300 grayscale group-hover:grayscale-0"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-dev-slate text-sm font-mono">
                {project.image ? 'Loading...' : 'No Preview'}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div
          className={`md:col-span-6 md:row-start-1 relative z-10 ${
            reversed
              ? 'md:col-start-1 md:text-left'
              : 'md:col-start-7 md:text-right'
          }`}
        >
          <p className="text-accent font-mono text-xs mb-2">{project.role} @ {project.company}</p>
          <h3 className="text-xl md:text-2xl font-bold text-lightest-slate mb-4 hover:text-accent transition-colors">
            {project.title}
          </h3>

          <div className="bg-navy-light rounded-lg p-5 md:p-6 mb-4 shadow-xl">
            <p className="text-sm leading-relaxed text-slate-light">{project.description}</p>
          </div>

          <div className={`flex flex-wrap gap-2 mb-3 text-xs font-mono ${reversed ? '' : 'md:justify-end'}`}>
            <span className="text-dev-slate">{project.period}</span>
          </div>

          <div className={`flex flex-wrap gap-2 mb-4 text-xs font-mono ${reversed ? '' : 'md:justify-end'}`}>
            {project.tech.map((t) => (
              <span key={t} className="text-slate-light">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-lightest-slate hover:text-accent transition-colors font-mono text-sm"
            >
              Close [ESC]
            </button>
            <div className="relative w-full aspect-video bg-navy-light rounded overflow-hidden border border-navy-lighter">
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

function PersonalProjectCard({
  project,
  index,
}: {
  project: (typeof personalProjects)[0]
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-navy-light rounded-lg overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      {project.image && !imgError ? (
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            onError={() => setImgError(true)}
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Folder className="w-10 h-10 text-accent" />
          <div className="flex items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-light hover:text-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-dev-slate">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <div>
      {/* Career Projects - Featured */}
      <div className="mb-16">
        <p className="text-accent font-mono text-sm mb-8">경력 프로젝트</p>
        {careerProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            index={index}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Personal Projects */}
      <div>
        <p className="text-accent font-mono text-sm mb-2">개인 프로젝트</p>
        <h3 className="text-2xl font-bold text-lightest-slate mb-8">
          Other Noteworthy Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
