'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Award,
  Briefcase,
  Code,
  Calendar,
  TrendingUp,
} from 'lucide-react'
import ChatBot from '@/components/ChatBot'
import BentoGrid from '@/components/BentoGrid'
import TechStack from '@/components/TechStack'
import Timeline from '@/components/Timeline'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  const stats = [
    { label: '프로젝트 수행', value: '5+', icon: Briefcase },
    { label: '개발 경력', value: '4년+', icon: Calendar },
    { label: '기술 스택', value: '12+', icon: Code },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* 심플한 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">ERP Developer Portfolio</h1>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:leemin-dev@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={() => setShowChat(true)}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              AI 챗봇
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="pt-20">
        {/* Hero Section - 강화 */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* 왼쪽: 소개 */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-400">sm.lee • 4년+ 경력 ERP 전문 개발자</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    공공기관 ERP
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      구축 전문가
                    </span>
                  </h2>

                  <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                    WebSquare, Nexacro 기반 대형 공공기관 ERP 시스템 구축 경험을 보유한 개발자입니다.
                  </p>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    한국철도공사, 가스안전공사, 인천환경공단 등 5개 이상의 프로젝트를 수행하였으며,
                    현재는 프로젝트 리더(PL)로서 전체 시스템 개발을 총괄하고 있습니다.
                  </p>

                  <div className="flex items-center gap-3 mb-8">
                    <button
                      onClick={() => setShowChat(true)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 font-semibold"
                    >
                      <MessageSquare className="w-5 h-5" />
                      AI 챗봇으로 문의하기
                    </button>
                    <button
                      onClick={() =>
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-semibold"
                    >
                      프로젝트 보기
                    </button>
                  </div>

                  {/* 연락처 */}
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <a
                      href="mailto:leemin-dev@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      leemin-dev@gmail.com
                    </a>
                    <span>•</span>
                    <span>서울, 대한민국</span>
                  </div>
                </div>

                {/* 오른쪽: 통계 */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
                    >
                      <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 핵심 역량 */}
        <section className="px-6 py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-3">핵심 역량</h3>
              <p className="text-slate-400">공공기관 ERP 프로젝트 전문성</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'WebSquare/Nexacro 전문',
                  description: '대형 공공기관 ERP 구축에 최적화된 프레임워크 전문가',
                  icon: Code,
                  highlights: ['WebSquare SP5', 'Nexacro', '전자정부 프레임워크 4.0'],
                },
                {
                  title: '시스템 통합 경험',
                  description: 'SSO 연계, 전자결재 연동, 그룹웨어 통합 등 다양한 연동 경험',
                  icon: TrendingUp,
                  highlights: ['SSO 연계', 'Handy 전자결재', '그룹웨어 연동'],
                },
                {
                  title: '검증된 프로젝트 성공률',
                  description: '모든 프로젝트 배포 후 이슈 제로, 대용량 데이터 처리 및 마이그레이션 성공',
                  icon: Award,
                  highlights: ['배포 후 무결함', '데이터 마이그레이션', '대용량 처리'],
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 mb-4 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <TechStack />

        {/* 프로젝트 섹션 */}
        <section id="projects" className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">프로젝트 경력</h3>
                <p className="text-slate-400">대형 공공기관 ERP 시스템 개발 및 구축 경험</p>
              </div>

              <BentoGrid />
            </motion.div>
          </div>
        </section>

        {/* 경력 타임라인 */}
        <Timeline />

        {/* 자격증 & 주요 성과 */}
        <section className="px-6 py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-3">자격증 & 주요 성과</h3>
              <p className="text-slate-400">전문성과 검증된 프로젝트 실적</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 자격증 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">자격증</h4>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="text-white font-semibold mb-1">정보처리기사</h5>
                        <p className="text-sm text-slate-400">한국산업인력공단</p>
                      </div>
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 주요 성과 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">주요 성과</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">프로젝트 무결함 배포</h5>
                      <p className="text-sm text-slate-400">
                        모든 프로젝트 배포 후 이슈 제로 달성
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">데이터 마이그레이션 성공</h5>
                      <p className="text-sm text-slate-400">
                        구 ERP 시스템 데이터 무결성 보장하며 완전 이관
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-medium mb-1">대용량 데이터 처리 최적화</h5>
                      <p className="text-sm text-slate-400">
                        성능 문제 해결 및 효율적인 대용량 처리 구현
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 관심 기술 & 학습 중 */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-3">관심 기술 & 학습 중</h3>
              <p className="text-slate-400">미래를 준비하는 기술 스택</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: 'Next.js & React',
                  description: '현대적인 웹 개발 프레임워크 (본 포트폴리오 프로젝트)',
                  icon: Code,
                  color: 'from-cyan-500 to-blue-500',
                  status: '학습 중',
                },
                {
                  name: 'AI/ML',
                  description: 'AI 기술 및 머신러닝 활용',
                  icon: Bot,
                  color: 'from-purple-500 to-pink-500',
                  status: '관심 분야',
                },
                {
                  name: 'AWS Cloud',
                  description: '클라우드 인프라 및 서비스',
                  icon: TrendingUp,
                  color: 'from-orange-500 to-red-500',
                  status: '관심 분야',
                },
                {
                  name: 'Docker & K8s',
                  description: '컨테이너 오케스트레이션',
                  icon: Briefcase,
                  color: 'from-blue-500 to-cyan-500',
                  status: '관심 분야',
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                  <p className="text-sm text-slate-400 mb-3">{tech.description}</p>
                  <span className="inline-block text-xs px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {tech.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-slate-800 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>Developer: sm.lee</p>
                  <p>Email: leemin-dev@gmail.com</p>
                  <p>Location: 서울, 대한민국</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Skills</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>WebSquare, Nexacro</p>
                  <p>전자정부 프레임워크</p>
                  <p>PostgreSQL, Oracle, Tibero</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Links</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:leemin-dev@gmail.com"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-slate-500 text-sm pt-8 border-t border-slate-800">
              <p>&copy; 2025 sm.lee • ERP Developer Portfolio • Built with Next.js 16 & Groq AI</p>
            </div>
          </div>
        </footer>
      </main>

      {/* ChatBot */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}

      {/* Floating Chat Button */}
      {!showChat && (
        <motion.button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Bot className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </div>
  )
}
