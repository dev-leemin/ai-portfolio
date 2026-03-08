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
    '4년+ ERP 전문 개발자 이상민의 포트폴리오. 프로젝트 상세, 시스템 구성도, 기술 스택.',
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

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold text-[#0a192f] mb-1.5 flex items-center gap-1.5">
      <span className="w-1 h-1 rounded-full bg-[#64ffda] inline-block" />
      {children}
    </p>
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
          <p className="font-mono">
            <span className="text-orange-500">PK</span>{' '}
            <span className="text-[#0a192f]">{pk}</span>
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

function BeforeAfter({
  before,
  action,
  after,
}: {
  before: { title: string; desc: string }
  action?: { title: string; desc: string }
  after: { title: string; desc: string }
}) {
  return (
    <div className="bg-[#f8f9fa] rounded p-3 text-[10px]">
      <div className={`grid ${action ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
        <div className="border border-red-200 bg-red-50 rounded p-2">
          <p className="font-bold text-red-600 mb-1">Before</p>
          <p className="text-gray-600 font-semibold">{before.title}</p>
          <p className="text-gray-500">{before.desc}</p>
        </div>
        {action && (
          <div className="border border-yellow-200 bg-yellow-50 rounded p-2">
            <p className="font-bold text-yellow-600 mb-1">Action</p>
            <p className="text-gray-600">{action.title}</p>
            <p className="text-gray-500">{action.desc}</p>
          </div>
        )}
        <div className="border border-green-200 bg-green-50 rounded p-2">
          <p className="font-bold text-green-600 mb-1">After</p>
          <p className="text-gray-600 font-semibold">{after.title}</p>
          <p className="text-gray-500">{after.desc}</p>
        </div>
      </div>
    </div>
  )
}

function IssueAndPlan({
  issues,
  plans,
}: {
  issues: string[]
  plans: string[]
}) {
  return (
    <div className="grid grid-cols-2 gap-3 text-[10px]">
      <div className="border border-orange-200 bg-orange-50/50 rounded p-3">
        <p className="font-bold text-orange-600 mb-1.5">현재 문제점 / 한계</p>
        <ul className="space-y-0.5 text-gray-600">
          {issues.map((item, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-blue-200 bg-blue-50/50 rounded p-3">
        <p className="font-bold text-blue-600 mb-1.5">개선 방향</p>
        <ul className="space-y-0.5 text-gray-600">
          {plans.map((item, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TechReason({ items }: { items: { tech: string; reason: string }[] }) {
  return (
    <div className="bg-[#f8f9fa] rounded p-3 text-[10px] space-y-1.5">
      {items.map((item) => (
        <div key={item.tech} className="flex items-start gap-2">
          <span className="font-bold text-[#0a192f] bg-gray-200 px-1.5 py-0.5 rounded shrink-0 font-mono">
            {item.tech}
          </span>
          <span className="text-gray-600 pt-0.5">{item.reason}</span>
        </div>
      ))}
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

/* ─── Career Project Card ─── */

function CareerSection({
  project,
  arch,
  extras,
}: {
  project: (typeof careerProjects)[0]
  arch: { main: { label: string; sub: string }[]; integrations: { label: string; sub: string }[] }
  extras?: React.ReactNode
}) {
  return (
    <section className="px-8 py-8 print:break-before-page">
      <div className="bg-[#0a192f] text-white rounded-t-lg px-5 py-3 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-base">{project.title}</h3>
          <p className="text-[#64ffda] text-xs font-mono">
            {project.role} · {project.type} · 팀 {project.team}
          </p>
        </div>
        <span className="text-gray-400 text-xs">{project.period}</span>
      </div>

      <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 space-y-5">
        {/* 개요 */}
        <div>
          <SubLabel>프로젝트 개요</SubLabel>
          <p className="text-xs text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        {/* 시스템 구성도 */}
        <div>
          <SubLabel>시스템 구성도</SubLabel>
          <div className="bg-[#f8f9fa] rounded p-4">
            <div className="flex items-center justify-center flex-wrap gap-1">
              {arch.main.map((node, i) => (
                <span key={node.label} className="contents">
                  {i > 0 && <ArchArrow />}
                  <ArchBox label={node.label} sub={node.sub} accent={i === arch.main.length - 1} />
                </span>
              ))}
            </div>
            {arch.integrations.length > 0 && (
              <>
                <ArchArrowDown />
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {arch.integrations.map((node) => (
                    <ArchBox key={node.label} label={node.label} sub={node.sub} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 담당 업무 */}
        <div>
          <SubLabel>담당 업무 상세</SubLabel>
          <ul className="text-xs text-gray-600 space-y-1 ml-3">
            {project.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-0.5 shrink-0">▹</span>
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 추가 콘텐츠 (Before/After 등) */}
        {extras}

        {/* 스크린샷 */}
        {project.image && (
          <div>
            <SubLabel>주요 화면</SubLabel>
            <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Challenge & Result */}
        <ChallengeBox challenge={project.challenge} result={project.result} />

        {/* Tech */}
        <div>
          {project.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */

export default function PortfolioPage() {
  const sorted = careerProjects.slice().reverse()

  return (
    <div className="portfolio-page bg-white min-h-screen">
      <PortfolioPrintButton />

      <main className="max-w-[210mm] mx-auto print:max-w-none text-gray-900">
        {/* ═══════════ COVER ═══════════ */}
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
              <div key={stat.label} className="border border-[#64ffda]/30 rounded-lg p-2 text-center">
                <p className="text-[#64ffda] font-bold text-base">{stat.value}</p>
                <p className="text-gray-400 text-[9px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-gray-400 space-y-0.5">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.github}</p>
            <p>{personalInfo.certification} — {personalInfo.certBody}</p>
          </div>
        </section>

        {/* ═══════════ CAREER PROJECTS ═══════════ */}

        {/* 인천환경공단 ERP */}
        <CareerSection
          project={sorted[0]!}
          arch={{
            main: [
              { label: 'Client', sub: 'Nexacro' },
              { label: 'WAS', sub: 'eGov Framework' },
              { label: 'Database', sub: 'PostgreSQL' },
            ],
            integrations: [
              { label: 'SSO', sub: '통합인증' },
              { label: '전자결재', sub: '결재연동' },
              { label: 'WebSocket', sub: '실시간 알림' },
              { label: 'Report', sub: '리포트 엔진' },
            ],
          }}
          extras={
            <div>
              <SubLabel>핵심 프로세스 — 인사평가 → 성과급 자동화</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-3">
                <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
                  {['1. 조직/사업소 관리', '2. 직원 배치', '3. 평가 기간 설정', '4. 근무/다면/개인/부서 평가', '5. KPI 집계', '6. 성과급 자동 계산'].map((step, i) => (
                    <span key={step} className="contents">
                      {i > 0 && <span className="text-gray-400">→</span>}
                      <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* 노지 HD맵 */}
        <CareerSection
          project={sorted[1]!}
          arch={{
            main: [
              { label: 'Client', sub: 'WebSquare SP5' },
              { label: 'WAS', sub: 'eGov 4.0' },
              { label: 'Database', sub: 'PostgreSQL' },
            ],
            integrations: [
              { label: 'OpenStreetMap', sub: '지도 레이어' },
              { label: '정사처리 API', sub: 'Ortho 병행처리' },
              { label: 'NDVI', sub: '식생지수 분석' },
            ],
          }}
          extras={
            <div>
              <SubLabel>동작 과정 — 드론 영상 → NDVI 분석</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-3">
                <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
                  {['1. 드론 영상 업로드', '2. 정사 처리 (병행)', '3. 레이어 생성', '4. 지도 시각화', '5. NDVI 분석'].map((step, i) => (
                    <span key={step} className="contents">
                      {i > 0 && <span className="text-gray-400">→</span>}
                      <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* Zeniel ERP */}
        <CareerSection
          project={sorted[2]!}
          arch={{
            main: [
              { label: 'Client', sub: 'WebSquare SP5' },
              { label: 'WAS', sub: 'eGov 4.0' },
              { label: 'Database', sub: 'PostgreSQL' },
            ],
            integrations: [
              { label: '그룹웨어', sub: '일정/메일/게시판' },
              { label: '세금계산서', sub: 'API 연동' },
              { label: '전자결재', sub: '결재 시스템' },
            ],
          }}
          extras={
            <div>
              <SubLabel>급여 프로시저 튜닝 과정</SubLabel>
              <BeforeAfter
                before={{ title: '실행 시간: 3분', desc: '전체 테이블 풀스캔, 불필요한 JOIN 다수' }}
                action={{ title: '인덱스 최적화', desc: '쿼리 리팩터링, 불필요 JOIN 제거, 실행계획 분석' }}
                after={{ title: '실행 시간: 12초', desc: '93% 성능 개선 달성' }}
              />
            </div>
          }
        />

        {/* 가스안전공사 */}
        <CareerSection
          project={sorted[3]!}
          arch={{
            main: [
              { label: 'Client', sub: 'Nexacro' },
              { label: 'WAS', sub: 'PowerMDD' },
              { label: 'Database', sub: 'Oracle' },
            ],
            integrations: [
              { label: '전자결재', sub: '결재 시스템' },
              { label: '마이그레이션', sub: '기존 DB → 신규 DB' },
            ],
          }}
          extras={
            <div>
              <SubLabel>예산통제 로직 통합</SubLabel>
              <BeforeAfter
                before={{ title: '전표별 개별 예산통제 함수', desc: '중복 코드, 유지보수 어려움' }}
                after={{ title: '단일 공통함수로 통합', desc: '모든 전표 유형 일관 처리, 유지보수성 향상' }}
              />
            </div>
          }
        />

        {/* KORAIL ERP */}
        <CareerSection
          project={sorted[4]!}
          arch={{
            main: [
              { label: 'Client', sub: 'WebSquare' },
              { label: 'WAS', sub: 'eGov Framework' },
              { label: 'Database', sub: 'Tibero' },
            ],
            integrations: [
              { label: 'SMTP', sub: '메일 발송' },
              { label: '급여 엔진', sub: '소득세법 기반' },
            ],
          }}
          extras={
            <div>
              <SubLabel>급여 계산 프로세스</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-3">
                <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
                  {['1. 발령/징계 조회', '2. 기본급 산정', '3. 수당 계산', '4. 소득세 공제', '5. SMTP 발송'].map((step, i) => (
                    <span key={step} className="contents">
                      {i > 0 && <span className="text-gray-400">→</span>}
                      <span className="px-2 py-1 bg-[#0a192f] text-[#64ffda] rounded">{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />

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
              <SubLabel>프로젝트 개요</SubLabel>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[0]?.description}
              </p>
            </div>

            {/* 기술 선택 이유 */}
            <div>
              <SubLabel>기술 선택 이유</SubLabel>
              <TechReason
                items={[
                  { tech: 'Next.js 16', reason: 'App Router의 SSR/SSG로 SEO 최적화, Server Actions로 별도 API 레이어 없이 서버 로직 처리' },
                  { tech: 'Claude API', reason: '초기 Groq AI 사용 중 한국어 응답 품질 문제 발생 → Claude로 전면 마이그레이션하여 면접 피드백 품질 대폭 향상' },
                  { tech: 'NextAuth v5', reason: 'Google, GitHub, Kakao 멀티 OAuth를 단일 설정으로 처리, JWT + Session 하이브리드 인증' },
                  { tech: 'Prisma', reason: '타입 세이프 ORM으로 DB 스키마 변경 시 컴파일 타임 에러 감지, 마이그레이션 자동화' },
                  { tech: 'Middleware', reason: 'Rate Limiting으로 AI API 남용 방지, Bot 탐지로 크롤링 차단, CSRF 보호' },
                ]}
              />
            </div>

            {/* Architecture */}
            <div>
              <SubLabel>시스템 구성도</SubLabel>
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
              <SubLabel>ERD (핵심 모델)</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[500px]">
                  <ERDEntity name="User" fields={['email', 'plan (Free/Pro)', 'provider']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Interview" fields={['type (기술/인성/경험)', 'messages[]', 'feedback']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Resume" fields={['content (JSON)', 'template', 'aiGenerated']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="SkillRoadmap" fields={['targetRole', 'skills[]', 'progress']} pk="id" />
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <SubLabel>주요 화면</SubLabel>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image src="/projects/jobready.png" alt="취뽀 (JobReady)" fill className="object-cover" />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[0]?.challenge || ''}
              result="6개 핵심 AI 기능 구현, 무료/Pro SaaS 모델 설계·배포 완료"
            />

            {/* 현재 문제점 / 개선 방향 */}
            <IssueAndPlan
              issues={[
                'Claude API 호출 비용이 사용량에 비례하여 증가 — Pro 플랜 수익으로 상쇄 필요',
                '면접 히스토리 데이터가 축적될수록 DB 조회 성능 저하 우려',
                'AI 응답 생성 시간(2-5초)으로 인한 UX 체감 대기',
              ]}
              plans={[
                '이력서 양식 자동 작성 기능 — 회사별 양식 업로드 시 AI가 자동으로 내용 채워서 작성',
                '면접 히스토리 기반 약점 분석 대시보드 추가',
                'Streaming SSE 응답으로 AI 대기 시간 체감 개선',
                '결제 시스템 도입으로 Pro 플랜 실제 과금 체계 구축',
              ]}
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
              <SubLabel>프로젝트 개요</SubLabel>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[1]?.description}
              </p>
            </div>

            {/* 기술 선택 이유 */}
            <div>
              <SubLabel>기술 선택 이유</SubLabel>
              <TechReason
                items={[
                  { tech: 'Neon PostgreSQL', reason: '서버리스 DB로 유휴 시 비용 제로 — 개인 프로젝트에 적합. 다만 콜드 스타트 문제 존재' },
                  { tech: 'WebSocket 드라이버', reason: 'Neon 콜드 스타트 5초 → 0.4초로 단축. HTTP 대신 WebSocket 프로토콜로 연결 재사용' },
                  { tech: 'NextAuth', reason: '소셜 로그인(Google, Kakao)으로 가입 허들 최소화, 별도 인증 서버 불필요' },
                  { tech: 'Prisma', reason: '15종 테스트 결과 스키마를 타입 안전하게 관리, 관계형 데이터(결과/리뷰/좋아요) 처리에 적합' },
                ]}
              />
            </div>

            {/* Architecture */}
            <div>
              <SubLabel>시스템 구성도</SubLabel>
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
                  <ArchBox label="CDN Cache" sub="정적 자산 캐싱" />
                </div>
              </div>
            </div>

            {/* ERD */}
            <div>
              <SubLabel>ERD (핵심 모델)</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[500px]">
                  <ERDEntity name="User" fields={['nickname', 'provider', 'avatar']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="TestResult" fields={['testType', 'answers[]', 'resultType']} pk="id" />
                  <ERDRelation label="N:1" />
                  <ERDEntity name="GroupRoom" fields={['code', 'hostId', 'status']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Review" fields={['content', 'likes', 'userId']} pk="id" />
                </div>
              </div>
            </div>

            {/* Cold Start Optimization */}
            <div>
              <SubLabel>Neon DB 콜드 스타트 최적화</SubLabel>
              <BeforeAfter
                before={{ title: '첫 요청: 5초', desc: 'Neon Serverless 콜드 스타트' }}
                action={{ title: 'WebSocket 드라이버 + CDN 캐싱', desc: '연결 프로토콜 변경 + 정적 데이터 캐싱' }}
                after={{ title: '첫 요청: 0.4초', desc: '92% 개선 달성' }}
              />
            </div>

            {/* Screenshot */}
            <div>
              <SubLabel>주요 화면</SubLabel>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image src="/projects/doran.png" alt="도란도란" fill className="object-cover" />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[1]?.challenge || ''}
              result="15종 심리테스트, 그룹테스트(방 생성·참여·실시간 결과 비교), 리뷰·좋아요 시스템 구축 완료"
            />

            <IssueAndPlan
              issues={[
                '그룹테스트 동시 참여 시 실시간 결과 동기화 지연 가능성 (현재 폴링 방식)',
                '테스트 종류 15종으로 고정 — 사용자 참여도 유지를 위한 콘텐츠 확장 필요',
                '통계 데이터가 쌓일수록 시각화 쿼리 성능 저하 우려',
              ]}
              plans={[
                'WebSocket 기반 실시간 동기화로 그룹테스트 UX 개선',
                '사용자 제작 테스트 기능 — 누구나 심리테스트를 만들어 공유',
                'SNS 공유 시 결과 카드 이미지 자동 생성 (OG Image 동적 생성)',
                '연령대/성별 기반 통계 대시보드 고도화',
              ]}
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
              <SubLabel>프로젝트 개요</SubLabel>
              <p className="text-xs text-gray-600 leading-relaxed">
                {personalProjects[2]?.description}
              </p>
            </div>

            {/* 기술 선택 이유 */}
            <div>
              <SubLabel>기술 선택 이유</SubLabel>
              <TechReason
                items={[
                  { tech: 'CDM 모델', reason: '논문(arXiv:2403.12836) 기반 확률 모델 — 학술적 근거가 있는 예측 알고리즘으로 서비스 신뢰성 확보' },
                  { tech: 'ml-regression', reason: '클라이언트 사이드에서도 실행 가능한 경량 ML 라이브러리, 서버 부하 없이 예측 가능' },
                  { tech: 'AdSense', reason: '무료 서비스 + 광고 수익화 모델로 운영비 충당. CSP 충돌 해결 필요했음' },
                  { tech: 'Neon PostgreSQL', reason: '역대 당첨 데이터 저장 및 통계 분석 쿼리에 활용, WebSocket 드라이버로 콜드 스타트 1초 미만' },
                ]}
              />
            </div>

            {/* Architecture */}
            <div>
              <SubLabel>시스템 구성도</SubLabel>
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

            {/* ERD */}
            <div>
              <SubLabel>ERD (핵심 모델)</SubLabel>
              <div className="bg-[#f8f9fa] rounded p-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-[450px]">
                  <ERDEntity name="LottoDraw" fields={['drawNo', 'numbers[6]', 'bonusNo', 'drawDate']} pk="id" />
                  <ERDRelation label="1:N" />
                  <ERDEntity name="Prediction" fields={['model', 'predicted[6]', 'confidence']} pk="id" />
                  <ERDRelation label="1:1" />
                  <ERDEntity name="BackTest" fields={['matchCount', 'drawRange', 'accuracy']} pk="id" />
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div>
              <SubLabel>주요 화면</SubLabel>
              <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden border border-gray-200">
                <Image src="/projects/lotto.png" alt="내로또" fill className="object-cover" />
              </div>
            </div>

            <ChallengeBox
              challenge={personalProjects[2]?.challenge || ''}
              result="SEO 최적화 및 AdSense 수익화 파이프라인 구축, 백테스트 역검증 시스템 구현 완료"
            />

            <IssueAndPlan
              issues={[
                '모바일에서 차트/그래프 렌더링 시 프레임 드롭 발생 (대량 데이터 시각화)',
                '당첨 통계 데이터 수동 업데이트 — 자동 크롤링 미완성',
                '단일 CDM 모델만 사용 중 — 다양한 알고리즘 비교 불가',
              ]}
              plans={[
                '차트 가상화(Virtualization) 적용으로 모바일 렌더링 성능 개선',
                '당첨 데이터 자동 크롤링 스케줄러 구축 (Vercel Cron)',
                '예측 모델 앙상블 — 여러 알고리즘 결합으로 정확도 비교 기능',
                'PWA 전환으로 앱 설치 유도 및 오프라인 지원',
              ]}
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
                  return <SkillBar key={s.name} name={s.name} years={yearsNum} max={4} />
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ GROWTH PATH ═══════════ */}
        <section className="px-8 py-8">
          <SectionTitle>성장 경로</SectionTitle>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            {experiences
              .slice()
              .reverse()
              .map((exp, i) => (
                <div key={i} className="relative pl-10 pb-6 last:pb-0">
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
