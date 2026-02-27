'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    company: '인천환경공단',
    title: '인천환경공단 ERP',
    role: '과장 / PL',
    type: '공공기관',
    team: '9명',
    period: '2024.07 - 현재',
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
        className="py-4 md:py-2 md:pl-8 flex-1 min-h-[360px]"
      >
        <h3 className="text-xl font-semibold text-lightest-slate mb-1">
          {activeExp.role}{' '}
          <span className="text-accent">@ {activeExp.company}</span>
        </h3>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
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
          <span className="text-xs font-mono text-dev-slate">팀 {activeExp.team}</span>
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
