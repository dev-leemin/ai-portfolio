import type { Metadata } from 'next'
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
    '4년+ ERP 전문 개발자 이상민의 포트폴리오. 프로젝트 상세, 기술 스택, 성과.',
  robots: { index: true, follow: true },
}

export default function PortfolioPage() {
  return (
    <div className="portfolio-page bg-white min-h-screen">
      <PortfolioPrintButton />

      <main className="max-w-[210mm] mx-auto px-8 py-12 print:px-0 print:py-0 print:max-w-none text-gray-900">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-4 mb-8">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              {personalInfo.name}
              <span className="text-lg font-normal text-gray-500 ml-3">
                Portfolio
              </span>
            </h1>
            <span className="text-sm text-gray-500">{personalInfo.email}</span>
          </div>
          <p className="text-base text-gray-600 mt-1">
            {personalInfo.role} | {personalInfo.experience} 경력 |{' '}
            {personalInfo.currentPosition}
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            소개
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-2">
            첫 프로젝트에서 소득세법도 급여계산법도 몰랐지만, 세법을 독학하고
            고객사 급여 체계를 분석해서 한국철도공사 급여시스템을 완성했습니다.
            이후로도 회계 전표, 관리회계, 인사평가 — 모르는 도메인을 만날 때마다
            같은 방식으로 해결해왔습니다.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            4년간 공공기관·민간 ERP를 5개 프로젝트 거치며 전 프로젝트 배포 후
            이슈 제로를 유지하고 있습니다. 현재는 인천환경공단 ERP에서 PL로
            9명 팀을 이끌고 있습니다.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            핵심 성과
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-2xl font-bold text-gray-900">ZERO</p>
              <p className="text-gray-600">전 프로젝트 배포 후 이슈</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-2xl font-bold text-gray-900">3분→12초</p>
              <p className="text-gray-600">급여 프로시저 성능 튜닝</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-2xl font-bold text-gray-900">~10,000명</p>
              <p className="text-gray-600">Zeniel ERP 사용자 규모</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-2xl font-bold text-gray-900">5초→0.4초</p>
              <p className="text-gray-600">Neon DB 콜드 스타트 단축</p>
            </div>
          </div>
        </section>

        {/* Career Projects - Detail */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">
            경력 프로젝트
          </h2>
          {careerProjects
            .slice()
            .reverse()
            .map((proj) => (
              <div
                key={proj.id}
                className="mb-6 last:mb-0 print:break-inside-avoid"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-gray-500 shrink-0 ml-4">
                    {proj.period}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  {proj.company} | {proj.role} | {proj.type} | 팀 {proj.team}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  {proj.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-2">
                  <p className="text-xs font-semibold text-gray-600 mb-1">
                    담당 업무
                  </p>
                  <ul className="text-xs text-gray-700 space-y-0.5 ml-4">
                    {proj.responsibilities.map((r, i) => (
                      <li key={i} className="list-disc">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge & Result */}
                <div className="bg-gray-50 rounded p-3 text-xs">
                  <div className="mb-1">
                    <span className="font-semibold text-gray-700">
                      Challenge:{' '}
                    </span>
                    <span className="text-gray-600">{proj.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Result:{' '}
                    </span>
                    <span className="text-gray-600">{proj.result}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-1.5">
                  {proj.tech.join(' / ')}
                </p>
              </div>
            ))}
        </section>

        {/* Personal Projects */}
        <section className="mb-8 print:break-before-page">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">
            개인 프로젝트
          </h2>
          {personalProjects.map((proj) => (
            <div
              key={proj.id}
              className="mb-5 last:mb-0 print:break-inside-avoid"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                {proj.url && (
                  <span className="text-xs text-blue-600 shrink-0 ml-4">
                    {proj.url}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                {proj.description}
              </p>
              {proj.challenge && (
                <div className="bg-gray-50 rounded p-3 text-xs mt-2">
                  <span className="font-semibold text-gray-700">
                    Challenge & Solution:{' '}
                  </span>
                  <span className="text-gray-600">{proj.challenge}</span>
                </div>
              )}
              <p className="text-xs text-gray-400 mt-1.5">
                {proj.tech.join(' / ')}
              </p>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {techCategories.map((cat) => (
              <div key={cat.category}>
                <span className="font-semibold text-gray-800">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded"
                    >
                      {s.name}
                      <span className="text-gray-400 ml-1">
                        {s.experience}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            경력 요약
          </h2>
          <div className="text-sm">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-xs text-gray-500 w-32 shrink-0 pt-0.5">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <span className="font-medium text-gray-900">
                    {exp.title}
                  </span>
                  <span className="text-gray-500 mx-2">|</span>
                  <span className="text-gray-600">{exp.role}</span>
                  <span className="text-gray-500 mx-2">|</span>
                  <span className="text-gray-600">{exp.company}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-300 pt-4 text-xs text-gray-500 flex justify-between">
          <span>
            {personalInfo.certification} — {personalInfo.certBody}
          </span>
          <span>{personalInfo.github}</span>
        </footer>
      </main>
    </div>
  )
}
