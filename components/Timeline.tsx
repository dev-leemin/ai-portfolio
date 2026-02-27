'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    company: '인천환경공단',
    title: '인천환경공단 ERP',
    role: 'PL (프로젝트 리더)',
    type: '공공기관',
    period: '2024.07 - 현재',
    description: [
      'PL로서 프로젝트 일정 관리 및 개발 총괄',
      'SSO(Single Sign-On) 연계 설계 및 구현',
      'Handy 전자결재 시스템 연동 개발',
      '공통 모듈(코드관리, 로그, 알림 등) 설계/개발',
      '인사-평가 시스템 개발',
    ],
    tech: ['Nexacro', '전자정부', 'PostgreSQL'],
  },
  {
    company: '노지 HD Map',
    title: '노지 HD맵 프로젝트',
    role: '개발자',
    type: '정부용역',
    period: '2024.11 - 2024.12',
    description: [
      '전체 시스템 아키텍처 설계 및 플랫폼 구축',
      '드론 촬영 영상 업로드 및 관리 기능 개발',
      '정사 처리(Ortho) 후 이미지 합성 연동',
      '식생지수(NDVI) 조회 및 시각화 기능 구현',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
  },
  {
    company: 'Zeniel',
    title: 'Zeniel ERP',
    role: '개발자',
    type: '민간',
    period: '2023.04 - 2024.07',
    description: [
      '사용자/권한/메뉴 관리 등 시스템 공통 모듈 개발',
      '관리회계: 재무회계 데이터를 경영관리 관점으로 가공/조회',
      '그룹웨어 연동 (일정, 메일, 게시판 등)',
      '파일 업로드/다운로드 공통 모듈 구현',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
  },
  {
    company: '한국가스안전공사',
    title: '가스안전공사 차세대 ERP',
    role: '개발자',
    type: '공공기관',
    period: '2022.07 - 2023.03',
    description: [
      '인사-평가 시스템 전체 설계 및 개발 (주 담당)',
      '구 ERP → 차세대 ERP 데이터 마이그레이션',
      '간이결재 시스템 관리 및 유지보수',
      '사용자 권한 관리 체계 구현',
    ],
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
  },
  {
    company: '한국철도공사',
    title: 'KORAIL ERP - 급여시스템',
    role: '개발자',
    type: '공공기관',
    period: '2021.05 - 2022.04',
    description: [
      '전자정부 프레임워크 기반 급여 시스템 개발',
      'WebSquare 기반 UI 구현',
      'Tibero DB 연동 및 데이터 처리',
      '급여 명세서 조회/출력 기능 구현',
    ],
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero'],
  },
]

export default function Timeline() {
  const [activeTab, setActiveTab] = useState(0)
  const activeExp = experiences[activeTab]

  return (
    <div className="flex flex-col md:flex-row gap-0">
      {/* Tab List */}
      <div className="relative md:w-56 flex-shrink-0 overflow-x-auto md:overflow-x-visible">
        <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-navy-lighter">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 text-left text-sm font-mono whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                activeTab === i
                  ? 'text-accent border-accent bg-navy-light/50'
                  : 'text-dev-slate border-transparent hover:text-accent hover:bg-navy-light/30'
              }`}
            >
              {exp.company.length > 12 ? exp.company.slice(0, 10) + '...' : exp.company}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="py-4 md:py-2 md:pl-8 flex-1 min-h-[320px]"
      >
        <h3 className="text-xl font-semibold text-lightest-slate mb-1">
          {activeExp.role}{' '}
          <span className="text-accent">@ {activeExp.company}</span>
        </h3>
        <div className="flex items-center gap-3 mb-1">
          <p className="text-sm font-mono text-dev-slate">{activeExp.title}</p>
          <span className={`text-xs font-mono px-2 py-0.5 rounded ${
            activeExp.type === '공공기관'
              ? 'bg-accent-tint text-accent'
              : activeExp.type === '정부용역'
                ? 'bg-blue-500/10 text-blue-400'
                : 'bg-purple-500/10 text-purple-400'
          }`}>
            {activeExp.type}
          </span>
        </div>
        <p className="text-sm font-mono text-dev-slate mb-6">{activeExp.period}</p>

        <ul className="space-y-3">
          {activeExp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
              <span className="text-slate-light">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {activeExp.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-full bg-accent-tint text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
