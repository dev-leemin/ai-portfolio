import type { Metadata } from 'next'
import Image from 'next/image'
import {
  personalInfo,
  experiences,
  careerProjects,
  personalProjects,
  techCategories,
} from '@/lib/resume-data'
import PortfolioPrintButton from './portfolio-print-button'

export const metadata: Metadata = {
  title: '이상민 | 포트폴리오 - ERP 전문 개발자',
  description:
    '4년+ ERP 전문 개발자 이상민의 포트폴리오. 프로젝트 상세, 시스템 구성도, ERD, 기술 스택.',
  robots: { index: true, follow: true },
}

/* ─── Helper Components ─── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold text-[#0a192f] border-l-4 border-[#64ffda] pl-3 mb-4">
      {children}
    </h2>
  )
}

function ArchBox({
  label,
  sub,
  accent,
}: {
  label: string
  sub: string
  accent?: boolean
}) {
  return (
    <div
      className={`border-2 rounded-lg px-4 py-2.5 text-center min-w-[90px] ${
        accent
          ? 'border-[#64ffda] bg-[#0a192f] text-white'
          : 'border-[#0a192f] bg-[#f0f4f8]'
      }`}
    >
      <p className={`text-xs font-bold ${accent ? 'text-[#64ffda]' : 'text-[#0a192f]'}`}>
        {label}
      </p>
      <p className={`text-[10px] mt-0.5 ${accent ? 'text-gray-300' : 'text-gray-500'}`}>
        {sub}
      </p>
    </div>
  )
}

function ArchArrow() {
  return <span className="text-[#0a192f] text-lg font-bold mx-1 self-center">→</span>
}

function ArchArrowDown() {
  return (
    <div className="flex justify-center my-1">
      <span className="text-[#0a192f] text-lg font-bold">↓</span>
    </div>
  )
}

function ERDEntity({
  name,
  fields,
  pk,
}: {
  name: string
  fields: string[]
  pk?: string
}) {
  return (
    <div className="border border-[#0a192f] rounded overflow-hidden text-[10px] min-w-[85px]">
      <div className="bg-[#0a192f] text-white px-2 py-1 font-bold text-center">
        {name}
      </div>
      <div className="px-2 py-1 bg-white space-y-0.5">
        {pk && (
          <p className="text-[#64ffda] font-mono">
            <span className="text-orange-500">PK</span> {pk}
          </p>
        )}
        {fields.map((f) => (
          <p key={f} className="text-gray-600 font-mono">
            {f}
          </p>
        ))}
      </div>
    </div>
  )
}

function ERDRelation({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center mx-1">
      <span className="text-[9px] text-gray-400 mb-0.5">{label}</span>
      <span className="text-gray-400 text-xs">──→</span>
    </div>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-block text-[10px] px-2 py-0.5 bg-[#0a192f] text-[#64ffda] rounded-full font-mono mr-1 mb-1">
      {name}
    </span>
  )
}

function ChallengeBox({
  challenge,
  result,
}: {
  challenge: string
  result: string
}) {
  return (
    <div className="border-l-3 border-[#64ffda] bg-[#f8fffe] rounded-r p-3 text-xs">
      <div className="mb-2">
        <span className="font-bold text-[#0a192f]">Challenge </span>
        <span className="text-gray-600">{challenge}</span>
      </div>
      <div className="flex items-start gap-1">
        <span className="text-[#64ffda] font-bold mt-0.5">→</span>
        <div>
          <span className="font-bold text-[#0a192f]">Result </span>
          <span className="text-gray-600">{result}</span>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, years, max }: { name: string; years: number; max: number }) {
  const percent = Math.round((years / max) * 100)
  return (
    <div className="flex items-center gap-2 text-xs mb-1.5">
      <span className="w-32 text-gray-700 shrink-0">{name}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0a192f] rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-gray-400 w-8 text-right shrink-0">{years}년</span>
    </div>
  )
}

/* ─── Main Page ─── */

export default function PortfolioPage() {
  const sortedCareerProjects = careerProjects.slice().reverse()

  return (
    <div className="portfolio-page bg-white min-h-screen">
      <PortfolioPrintButton />

      <main className="max-w-[210mm] mx-auto print:max-w-none text-gray-900">
        {/* ═══════════════════════════════════ COVER ═══════════════════════════════════ */}
        <section className="bg-[#0a192f] text-white px-10 py-16 print:px-8 print:py-12 min-h-[60vh] print:min-h-0 flex flex-col justify-center">
          <p className="text-[#64ffda] font-mono text-sm mb-2">DEVELOPER PORTFOLIO</p>
          <h1 className="text-4xl font-bold mb-1">{personalInfo.name}</h1>
          <p className="text-xl text-gray-300 mb-4">{personalInfo.role}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['ERP 전문', '문제해결', '신입→PL'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-[#64ffda]/50 text-[#64ffda] rounded-full text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-lg mb-8">
            세법도 회계도 몰랐지만 배워서 구현했고, 신입사원에서 시작해 9명 팀의
            PL이 되었습니다. 4년간 5개 프로젝트 전 프로젝트 배포 후 이슈 제로.
          </p>

          <div className="grid grid-cols-4 gap-3 max-w-lg">
            {[
              { value: 'ZERO', label: '배포 후 이슈' },
              { value: '3m→12s', label: '프로시저 튜닝' },
              { value: '10K', label: '사용자 규모' },
              { value: '4년+', label: '경력' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-[#64ffda]/30 rounded-lg p-2 text-center"
              >
                <p className="text-[#64ffda] font-bold text-base">{stat.value}</p>
                <p className="text-gray-400 text-[9px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-gray-400 space-y-0.5">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.github}</p>
            <p>
              {personalInfo.certification} — {personalInfo.certBody}
            </p>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECT 1: 인천환경공단 ERP ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">인천환경공단 ERP</h3>
              <p className="text-[#64ffda] text-xs font-mono">
                PL (프로젝트 리더) · 공공기관 · 팀 9명
              </p>
            </div>
            <span className="text-gray-400 text-xs">2025.07 - 진행중</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {sortedCareerProjects[0]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Client" sub="Nexacro" />
                  <ArchArrow />
                  <ArchBox label="WAS" sub="eGov Framework" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="SSO" sub="통합인증" />
                  <ArchBox label="전자결재" sub="결재연동" />
                  <ArchBox label="WebSocket" sub="실시간 알림" />
                  <ArchBox label="Report" sub="리포트 엔진" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (담당 영역)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[500px]">
                  <ERDEntity name="조직" fields={['부서명', '사업소', '상위부서']} pk="조직코드" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="직원" fields={['이름', '직급', '입사일']} pk="사번" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="평가" fields={['평가유형', '점수', '기간']} pk="평가ID" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="KPI" fields={['목표치', '달성률']} pk="KPI_ID" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="성과급" fields={['금액', '계산일']} pk="성과급ID" />
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/incheon.png"
                  alt="인천환경공단 ERP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">담당 업무</p>
              <ul className="text-xs text-gray-600 space-y-0.5 ml-4">
                {sortedCareerProjects[0]?.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc">{r}</li>
                ))}
              </ul>
            </div>

            {/* Challenge */}
            <ChallengeBox
              challenge={sortedCareerProjects[0]?.challenge || ''}
              result={sortedCareerProjects[0]?.result || ''}
            />

            {/* Tech */}
            <div>
              {sortedCareerProjects[0]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECT 2: 노지 HD맵 ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">노지 HD맵 프로젝트</h3>
              <p className="text-[#64ffda] text-xs font-mono">
                과장 · 정부용역 · 팀 2명
              </p>
            </div>
            <span className="text-gray-400 text-xs">2024.11 - 2024.12</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {sortedCareerProjects[1]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Client" sub="WebSquare SP5" />
                  <ArchArrow />
                  <ArchBox label="WAS" sub="eGov 4.0" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="OpenStreetMap" sub="지도 레이어" />
                  <ArchBox label="정사처리 API" sub="Ortho 병행처리" />
                  <ArchBox label="NDVI" sub="식생지수 분석" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (담당 영역)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[400px]">
                  <ERDEntity name="농지" fields={['위치', '면적']} pk="필지코드" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="드론영상" fields={['촬영일', '파일경로']} pk="영상ID" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="정사이미지" fields={['해상도', '좌표']} pk="정사ID" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="NDVI" fields={['식생지수', '분석일']} pk="NDVI_ID" />
                </div>
              </div>
            </div>

            {/* Flow */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">동작 과정</p>
              <div className="bg-[#f8f9fa] rounded p-3">
                <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">1. 드론 영상 업로드</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">2. 정사 처리 (병행)</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">3. 레이어 생성</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">4. 지도 시각화</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">5. NDVI 분석</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">담당 업무</p>
              <ul className="text-xs text-gray-600 space-y-0.5 ml-4">
                {sortedCareerProjects[1]?.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc">{r}</li>
                ))}
              </ul>
            </div>

            <ChallengeBox
              challenge={sortedCareerProjects[1]?.challenge || ''}
              result={sortedCareerProjects[1]?.result || ''}
            />

            <div>
              {sortedCareerProjects[1]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECT 3: Zeniel ERP ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">Zeniel ERP</h3>
              <p className="text-[#64ffda] text-xs font-mono">
                대리/과장 · 민간 · 팀 8명
              </p>
            </div>
            <span className="text-gray-400 text-xs">2023.04 - 2024.07</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {sortedCareerProjects[2]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Client" sub="WebSquare SP5" />
                  <ArchArrow />
                  <ArchBox label="WAS" sub="eGov 4.0" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="그룹웨어" sub="일정/메일/게시판" />
                  <ArchBox label="세금계산서" sub="API 연동" />
                  <ArchBox label="전자결재" sub="결재 시스템" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (담당 영역)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[500px]">
                  <ERDEntity name="사용자" fields={['이름', '권한', '메뉴']} pk="사번" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="급여" fields={['기본급', '수당', '세금']} pk="급여ID" />
                  <ERDRelation label="N:1" />
                  <ERDEntity name="매출/매입" fields={['금액', '거래처', '일자']} pk="거래ID" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="관리회계" fields={['부서별 비용', '예산']} pk="회계ID" />
                </div>
              </div>
            </div>

            {/* Performance Tuning Flow */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">급여 프로시저 튜닝 과정</p>
              <div className="bg-[#f8f9fa] rounded p-3 text-[10px]">
                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-red-200 bg-red-50 rounded p-2">
                    <p className="font-bold text-red-600 mb-1">Before</p>
                    <p className="text-gray-600">실행 시간: <strong>3분</strong></p>
                    <p className="text-gray-500">전체 테이블 풀스캔, 불필요한 JOIN 다수</p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 rounded p-2">
                    <p className="font-bold text-yellow-600 mb-1">Action</p>
                    <p className="text-gray-600">인덱스 최적화, 쿼리 리팩터링, 불필요 JOIN 제거</p>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-2">
                    <p className="font-bold text-green-600 mb-1">After</p>
                    <p className="text-gray-600">실행 시간: <strong>12초</strong></p>
                    <p className="text-gray-500">93% 성능 개선</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/zeniel.png"
                  alt="Zeniel ERP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">담당 업무</p>
              <ul className="text-xs text-gray-600 space-y-0.5 ml-4">
                {sortedCareerProjects[2]?.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc">{r}</li>
                ))}
              </ul>
            </div>

            <ChallengeBox
              challenge={sortedCareerProjects[2]?.challenge || ''}
              result={sortedCareerProjects[2]?.result || ''}
            />

            <div>
              {sortedCareerProjects[2]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECT 4: 가스안전공사 ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">가스안전공사 차세대 ERP</h3>
              <p className="text-[#64ffda] text-xs font-mono">
                사원/대리 · 공공기관 · 팀 5명
              </p>
            </div>
            <span className="text-gray-400 text-xs">2022.07 - 2023.03</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {sortedCareerProjects[3]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Client" sub="Nexacro" />
                  <ArchArrow />
                  <ArchBox label="WAS" sub="PowerMDD" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="Oracle" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="전자결재" sub="결재 시스템" />
                  <ArchBox label="마이그레이션" sub="기존 DB → 신규 DB" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (담당 영역)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[450px]">
                  <ERDEntity name="직원" fields={['이름', '부서', '직급']} pk="사번" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="인사평가" fields={['평가유형', '점수']} pk="평가ID" />
                  <ERDRelation label="N:1" />
                  <ERDEntity name="회계전표" fields={['금액', '계정', '환율']} pk="전표ID" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="예산통제" fields={['예산액', '집행액']} pk="예산ID" />
                </div>
              </div>
            </div>

            {/* Budget Control Flow */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">예산통제 통합 과정</p>
              <div className="bg-[#f8f9fa] rounded p-3 text-[10px]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-red-200 bg-red-50 rounded p-2">
                    <p className="font-bold text-red-600 mb-1">Before</p>
                    <p className="text-gray-600">전표별 개별 예산통제 함수</p>
                    <p className="text-gray-500">중복 코드, 유지보수 어려움</p>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-2">
                    <p className="font-bold text-green-600 mb-1">After</p>
                    <p className="text-gray-600">단일 공통함수로 통합</p>
                    <p className="text-gray-500">모든 전표 유형 일관 처리</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/gas.png"
                  alt="가스안전공사 차세대 ERP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">담당 업무</p>
              <ul className="text-xs text-gray-600 space-y-0.5 ml-4">
                {sortedCareerProjects[3]?.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc">{r}</li>
                ))}
              </ul>
            </div>

            <ChallengeBox
              challenge={sortedCareerProjects[3]?.challenge || ''}
              result={sortedCareerProjects[3]?.result || ''}
            />

            <div>
              {sortedCareerProjects[3]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECT 5: KORAIL ERP ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">KORAIL ERP - 급여시스템</h3>
              <p className="text-[#64ffda] text-xs font-mono">
                신입사원 · 공공기관 · 팀 4명
              </p>
            </div>
            <span className="text-gray-400 text-xs">2021.05 - 2022.04</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {sortedCareerProjects[4]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Client" sub="WebSquare" />
                  <ArchArrow />
                  <ArchBox label="WAS" sub="eGov Framework" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="Tibero" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="SMTP" sub="메일 발송" />
                  <ArchBox label="급여 엔진" sub="소득세법 기반" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (담당 영역)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[500px]">
                  <ERDEntity name="직원" fields={['이름', '부서', '직급']} pk="사번" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="발령/징계" fields={['유형', '일자', '내용']} pk="발령ID" />
                  <ERDRelation label="N:1" />
                  <ERDEntity name="급여계산" fields={['기본급', '수당', '공제']} pk="급여ID" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="급여명세서" fields={['실수령액', '발송여부']} pk="명세ID" />
                </div>
              </div>
            </div>

            {/* Payroll Flow */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">급여 계산 프로세스</p>
              <div className="bg-[#f8f9fa] rounded p-3">
                <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">1. 발령/징계 조회</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">2. 기본급 산정</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">3. 수당 계산</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">4. 소득세 공제</span>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">5. SMTP 발송</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/korail.png"
                  alt="KORAIL ERP 급여시스템"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">담당 업무</p>
              <ul className="text-xs text-gray-600 space-y-0.5 ml-4">
                {sortedCareerProjects[4]?.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc">{r}</li>
                ))}
              </ul>
            </div>

            <ChallengeBox
              challenge={sortedCareerProjects[4]?.challenge || ''}
              result={sortedCareerProjects[4]?.result || ''}
            />

            <div>
              {sortedCareerProjects[4]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PERSONAL PROJECTS ═══════════ */}

        {/* 취뽀 (JobReady) */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="mb-6">
            <p className="text-[#64ffda] font-mono text-xs mb-1">PERSONAL PROJECTS</p>
            <SectionTitle>개인 프로젝트</SectionTitle>
          </div>

          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">취뽀 (JobReady)</h3>
              <p className="text-[#64ffda] text-xs font-mono">AI 기반 취업 준비 올인원 플랫폼</p>
            </div>
            <span className="text-gray-400 text-xs">{personalProjects[0]?.url}</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[0]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Frontend" sub="Next.js 16 / React 19" />
                  <ArchArrow />
                  <ArchBox label="API Routes" sub="Server Actions" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="Neon PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="Claude API" sub="AI 모의면접/생성" />
                  <ArchBox label="NextAuth v5" sub="멀티 OAuth" />
                  <ArchBox label="Prisma" sub="ORM" />
                  <ArchBox label="Middleware" sub="Rate Limit/Bot" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">ERD (핵심 모델)</p>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[450px]">
                  <ERDEntity name="User" fields={['email', 'plan', 'provider']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Interview" fields={['type', 'messages', 'feedback']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Resume" fields={['content', 'aiGenerated']} pk="id" />
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/jobready.png"
                  alt="취뽀 (JobReady)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[0]?.challenge || ''}
              result="6개 핵심 AI 기능 구현, 무료/Pro SaaS 모델 설계·배포 완료"
            />

            <div>
              {personalProjects[0]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* 도란도란 */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">도란도란</h3>
              <p className="text-[#64ffda] text-xs font-mono">심리테스트 소셜 플랫폼</p>
            </div>
            <span className="text-gray-400 text-xs">{personalProjects[1]?.url}</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[1]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Frontend" sub="Next.js 16 / React 19" />
                  <ArchArrow />
                  <ArchBox label="API Routes" sub="Server Actions" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="Neon PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="Prisma" sub="ORM" />
                  <ArchBox label="NextAuth" sub="인증" />
                  <ArchBox label="WebSocket" sub="실시간 그룹테스트" />
                </div>
              </div>
            </div>

            {/* Cold Start Optimization */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">콜드 스타트 최적화</p>
              <div className="bg-[#f8f9fa] rounded p-3 text-[10px]">
                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-red-200 bg-red-50 rounded p-2">
                    <p className="font-bold text-red-600 mb-1">Before</p>
                    <p className="text-gray-600">첫 요청 <strong>5초</strong></p>
                    <p className="text-gray-500">Neon DB 콜드 스타트</p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 rounded p-2">
                    <p className="font-bold text-yellow-600 mb-1">Action</p>
                    <p className="text-gray-600">WebSocket 드라이버 + CDN 캐싱 적용</p>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-2">
                    <p className="font-bold text-green-600 mb-1">After</p>
                    <p className="text-gray-600">첫 요청 <strong>0.4초</strong></p>
                    <p className="text-gray-500">92% 개선</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/doran.png"
                  alt="도란도란"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[1]?.challenge || ''}
              result="15종 심리테스트, 그룹테스트, 리뷰·좋아요 시스템 구축 완료"
            />

            <div>
              {personalProjects[1]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* 내로또 */}
        <section className="px-8 py-8 print:break-before-page">
          <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base">내로또 - AI 로또 예측기</h3>
              <p className="text-[#64ffda] text-xs font-mono">논문 기반 확률 모델 서비스</p>
            </div>
            <span className="text-gray-400 text-xs">{personalProjects[2]?.url}</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-1">개요</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[2]?.description}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">시스템 구성도</p>
              <div className="bg-[#f8f9fa] rounded p-4">
                <div className="flex items-center justify-center flex-wrap gap-1">
                  <ArchBox label="Frontend" sub="Next.js 16 / React 19" />
                  <ArchArrow />
                  <ArchBox label="API Routes" sub="CDM 확률 모델" />
                  <ArchArrow />
                  <ArchBox label="Database" sub="Neon PostgreSQL" accent />
                </div>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <ArchBox label="ml-regression" sub="머신러닝 예측" />
                  <ArchBox label="Prisma" sub="ORM" />
                  <ArchBox label="AdSense" sub="수익화" />
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <p className="text-xs font-bold text-[#0a192f] mb-2">주요 화면</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image
                  src="/projects/lotto.png"
                  alt="내로또"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[2]?.challenge || ''}
              result="SEO 최적화 및 AdSense 수익화 파이프라인 구축 완료"
            />

            <div>
              {personalProjects[2]?.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TECHNICAL SKILLS ═══════════ */}
        <section className="px-8 py-8 print:break-before-page">
          <SectionTitle>기술 스택</SectionTitle>

          <div className="grid grid-cols-2 gap-6">
            {techCategories.map((cat) => (
              <div key={cat.category}>
                <p className="text-xs font-bold text-[#0a192f] mb-2">{cat.category}</p>
                {cat.skills.map((s) => {
                  const yearsNum = s.experience === '학습중' ? 0.5 : parseInt(s.experience)
                  return (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      years={yearsNum}
                      max={4}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ GROWTH PATH ═══════════ */}
        <section className="px-8 py-8">
          <SectionTitle>성장 경로</SectionTitle>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

            {experiences
              .slice()
              .reverse()
              .map((exp, i) => (
                <div key={i} className="relative pl-10 pb-6 last:pb-0">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                      i === experiences.length - 1
                        ? 'bg-[#64ffda] border-[#64ffda]'
                        : 'bg-white border-[#0a192f]'
                    }`}
                  />
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] text-gray-400 font-mono w-28 shrink-0">
                      {exp.period}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#0a192f]">{exp.title}</p>
                      <p className="text-xs text-gray-500">
                        {exp.role} · {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="bg-[#0a192f] text-white px-8 py-6 text-center">
          <p className="text-[#64ffda] font-mono text-sm mb-1">Thank you for reading</p>
          <p className="text-gray-400 text-xs">
            {personalInfo.email} · {personalInfo.github}
          </p>
          <p className="text-gray-500 text-[10px] mt-2">
            {personalInfo.certification} — {personalInfo.certBody}
          </p>
        </footer>
      </main>
    </div>
  )
}
