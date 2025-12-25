'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const timeline = [
  {
    period: '2024.07 - 현재',
    title: '인천환경공단 ERP',
    company: '인천광역시환경공단',
    role: 'PL (프로젝트 리더)',
    location: '인천',
    description: '공통, 시스템, 인사-평가 분야 총괄',
    achievements: [
      'SSO 연계 및 Handy 전자결재 연동',
      '공통 모듈 개발 및 시스템 관리',
      'PL로서 프로젝트 총괄 및 팀 리드',
    ],
    tech: ['Nexacro', '전자정부', 'PostgreSQL'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    period: '2024.11 - 2024.12',
    title: '노지 HD맵 프로젝트',
    company: '(프로젝트)',
    role: '개발자',
    location: '서울',
    description: '드론 촬영 이미지 정사 처리 및 식생지수 조회 플랫폼',
    achievements: [
      '시스템 구축 및 데이터베이스 관리',
      '드론 이미지 업로드 및 정사 처리 구현',
      '식생지수 조회 기능 개발',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    period: '2023.04 - 2024.07',
    title: 'Zeniel ERP',
    company: 'Zeniel',
    role: '개발자',
    location: '서울',
    description: '시스템, 공통, 관리회계(경영관리) 전반 개발',
    achievements: [
      '사용자/권한/메뉴 관리 시스템 구축',
      '그룹웨어 연동 및 파일 업다운로드 기능 개발',
      '관리회계 시스템 및 대사우 시스템 구현',
    ],
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    period: '2022.07 - 2023.03',
    title: '가스안전공사 차세대 ERP',
    company: '한국가스안전공사',
    role: '개발자',
    location: '서울',
    description: '구 ERP 마이그레이션 및 차세대 시스템 구축',
    achievements: [
      '인사-평가 시스템 개발 (주 업무)',
      '데이터 마이그레이션 및 재무-회계 일부 개발',
      '간이결재 시스템 관리 및 권한 관리',
    ],
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
    color: 'from-orange-500 to-red-500',
  },
  {
    period: '2021.05 - 2022.04',
    title: 'KORAIL ERP - 급여시스템',
    company: '한국철도공사',
    role: '개발자',
    location: '대전',
    description: '급여 시스템 개발 담당',
    achievements: [
      '전자정부 프레임워크 기반 급여 시스템 개발',
      'WebSquare 기반 화면 구현',
      'Tibero DB 연동 및 데이터 처리',
    ],
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function Timeline() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-3">경력 타임라인</h3>
          <p className="text-slate-400">4년간의 ERP 개발 여정</p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* 타임라인 점 */}
                <div
                  className={`absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-slate-900`}
                />

                {/* 카드 */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all">
                  {/* 헤더 */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>
                        <span>•</span>
                        <span className="text-blue-400">{item.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* 기간 및 위치 */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* 설명 */}
                  <p className="text-slate-300 mb-4">{item.description}</p>

                  {/* 주요 성과 */}
                  <div className="mb-4">
                    <h5 className="text-xs text-slate-500 uppercase tracking-wider mb-2">주요 성과</h5>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h5 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
