import type { Metadata } from 'next'
import {
  personalInfo,
  experiences,
  personalProjects,
  techCategories,
} from '@/lib/resume-data'
import ResumePrintButton from './resume-print-button'

export const metadata: Metadata = {
  title: '이상민 | 이력서 - ERP 전문 개발자',
  description:
    '4년+ ERP 전문 개발자 이상민의 이력서. 공공기관 ERP 시스템 구축 전문.',
  robots: { index: true, follow: true },
}

export default function ResumePage() {
  return (
    <div className="resume-page bg-white min-h-screen">
      <ResumePrintButton />

      {/* A4 Container */}
      <main className="max-w-[210mm] mx-auto px-8 py-12 print:px-0 print:py-0 print:max-w-none text-gray-900">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {personalInfo.name}
            <span className="text-lg font-normal text-gray-500 ml-3">
              {personalInfo.nameEn}
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-1">
            {personalInfo.role} | {personalInfo.experience} 경력
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-600">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.github}</span>
            <span>
              {personalInfo.certification} ({personalInfo.certBody})
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            요약
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            공공기관 ERP 시스템 구축 4년+ 경력의 개발자입니다. 한국철도공사
            급여시스템을 시작으로, 가스안전공사 차세대 ERP, Zeniel ERP,
            인천환경공단 ERP까지 다양한 대형 프로젝트를 수행해왔습니다. 현재
            인천환경공단 ERP 프로젝트에서 PL(프로젝트 리더)로서 9명 팀을
            총괄하고 있습니다. 전 프로젝트 배포 후 이슈 제로를 달성했으며,
            급여 프로시저 3분→12초 튜닝, DB 콜드 스타트 5초→0.4초 단축 등
            성능 최적화 경험이 있습니다.
          </p>
        </section>

        {/* Career Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            경력 사항
          </h2>
          {experiences.map((exp, i) => (
            <div key={i} className="mb-5 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500 shrink-0 ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1.5">
                {exp.company} | {exp.role} | {exp.type} | 팀 {exp.team}
              </p>
              <ul className="text-sm text-gray-700 space-y-0.5 ml-4">
                {exp.description.map((item, j) => (
                  <li key={j} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-1.5">
                {exp.tech.join(' / ')}
              </p>
            </div>
          ))}
        </section>

        {/* Personal Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            개인 프로젝트
          </h2>
          {personalProjects.map((proj) => (
            <div key={proj.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                {proj.url && (
                  <span className="text-xs text-blue-600 shrink-0 ml-4">
                    {proj.url}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-0.5 leading-relaxed">
                {proj.description}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {proj.tech.join(' / ')}
              </p>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {techCategories.map((cat) => (
              <div key={cat.category}>
                <span className="font-semibold text-gray-800">
                  {cat.category}:
                </span>{' '}
                <span className="text-gray-700">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Certification */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            자격증
          </h2>
          <p className="text-sm text-gray-700">
            {personalInfo.certification} — {personalInfo.certBody}
          </p>
        </section>

        {/* Key Achievements */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            주요 성과
          </h2>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li className="list-disc">
              전 프로젝트 배포 후 이슈 제로 달성
            </li>
            <li className="list-disc">
              급여 프로시저 3분 → 12초 성능 튜닝 (Zeniel ERP)
            </li>
            <li className="list-disc">
              약 10,000명 사용자 대상 ERP 서비스 운영 (Zeniel)
            </li>
            <li className="list-disc">
              Neon DB 콜드 스타트 5초 → 0.4초 단축 (도란도란)
            </li>
            <li className="list-disc">
              신입사원에서 PL(프로젝트 리더)로 성장
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
