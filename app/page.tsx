'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react'
import ChatBot from '@/components/ChatBot'
import BentoGrid from '@/components/BentoGrid'
import TechStack from '@/components/TechStack'
import Timeline from '@/components/Timeline'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-navy text-dev-slate">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-md shadow-lg shadow-navy/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-mono text-xl font-bold hover:opacity-80 transition-opacity"
          >
            SM
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-light text-sm hover:text-accent transition-colors font-mono"
              >
                <span className="text-accent text-xs">0{i + 1}.</span>{' '}
                {item.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowChat(true)}
              className="ml-2 px-4 py-2 border border-accent text-accent text-sm rounded font-mono hover:bg-accent-tint transition-colors"
            >
              AI Chat
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowChat(true)}
            className="md:hidden text-accent"
          >
            <Bot className="w-5 h-5" />
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 md:px-12 max-w-6xl mx-auto">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-mono text-sm md:text-base mb-5"
            >
              안녕하세요, 저는
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-lightest-slate mb-3"
            >
              이상민입니다.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-dev-slate mb-6"
            >
              공공기관 ERP를 만듭니다.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl text-dev-slate text-lg leading-relaxed mb-10"
            >
              4년 이상의 경험을 보유한 ERP 전문 개발자입니다.
              한국철도공사, 가스안전공사, 인천환경공단 등 대형 공공기관 프로젝트를
              수행하며, 현재는{' '}
              <span className="text-accent">PL(프로젝트 리더)</span>로서
              프로젝트 전체를 총괄하고 있습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
                href="mailto:leemin-dev@gmail.com"
                className="px-6 py-3 border border-accent text-accent rounded font-mono text-sm hover:bg-accent-tint transition-colors"
              >
                연락하기
              </a>
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 text-slate-light text-sm hover:text-accent transition-colors font-mono"
              >
                프로젝트 보기 →
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
                <span className="text-accent font-mono text-xl mr-2">01.</span>
                About Me
              </h2>
              <div className="section-line flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-4">
                <p className="leading-relaxed">
                  4년 이상의{' '}
                  <span className="text-lightest-slate">공공기관 ERP 시스템 구축 경험</span>을
                  보유한 개발자입니다. 한국철도공사 급여시스템을 시작으로, 가스안전공사 차세대
                  ERP 마이그레이션, Zeniel ERP 관리회계 시스템, 인천환경공단 ERP까지
                  다양한 대형 프로젝트를 수행해왔습니다.
                </p>
                <p className="leading-relaxed">
                  인사-평가, 시스템/공통, 관리회계, 권한관리 등{' '}
                  <span className="text-lightest-slate">ERP의 핵심 모듈을 직접 설계하고 개발</span>한
                  경험이 있으며, SSO 연계, 전자결재 연동, 그룹웨어 통합 등 외부 시스템
                  연동까지 폭넓은 영역을 담당해왔습니다.
                </p>
                <p className="leading-relaxed">
                  현재는 인천환경공단 ERP 프로젝트에서{' '}
                  <span className="text-accent">PL(프로젝트 리더)</span>로서 프로젝트
                  전체를 총괄하고 있으며, 업무 외 시간에는 Next.js와 React를 활용한
                  개인 프로젝트를 통해 모던 웹 기술 역량을 확장하고 있습니다.
                </p>

                <div className="pt-4">
                  <p className="text-lightest-slate text-sm mb-3">최근 사용 기술:</p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono">
                    {[
                      'WebSquare SP5',
                      'Nexacro',
                      'Java / eGov Framework',
                      'PostgreSQL / Oracle',
                      'Next.js / React',
                      'TypeScript',
                    ].map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="text-accent text-xs">▹</span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Profile Card */}
              <div className="space-y-4">
                <div className="bg-navy-light border border-navy-lighter rounded-lg p-5 hover:border-accent/30 transition-colors">
                  <p className="text-accent font-mono text-xs mb-3">// certifications</p>
                  <h4 className="text-lightest-slate font-semibold mb-1">정보처리기사</h4>
                  <p className="text-sm">한국산업인력공단</p>
                </div>

                <div className="bg-navy-light border border-navy-lighter rounded-lg p-5 hover:border-accent/30 transition-colors">
                  <p className="text-accent font-mono text-xs mb-3">// highlights</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">▹</span>
                      모든 프로젝트 배포 후 이슈 제로
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">▹</span>
                      대용량 데이터 마이그레이션 무결성 달성
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">▹</span>
                      개발자에서 PL로 성장한 리더십
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
                <span className="text-accent font-mono text-xl mr-2">02.</span>
                Experience
              </h2>
              <div className="section-line flex-1" />
            </div>

            <Timeline />
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
                <span className="text-accent font-mono text-xl mr-2">03.</span>
                Projects
              </h2>
              <div className="section-line flex-1" />
            </div>

            <BentoGrid />
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
                <span className="text-accent font-mono text-xl mr-2">04.</span>
                Skills & Technologies
              </h2>
              <div className="section-line flex-1" />
            </div>

            <TechStack />
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-mono text-sm mb-4">05. What&apos;s Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
              Get In Touch
            </h2>
            <p className="text-lg mb-10 leading-relaxed">
              새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 편하게 연락주세요.
              AI 챗봇을 통해 저에 대해 더 자세히 알아보실 수도 있습니다.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:leemin-dev@gmail.com"
                className="px-8 py-4 border border-accent text-accent rounded font-mono text-sm hover:bg-accent-tint transition-colors"
              >
                Say Hello
              </a>
              <button
                onClick={() => setShowChat(true)}
                className="px-8 py-4 bg-accent/10 text-accent rounded font-mono text-sm hover:bg-accent/20 transition-colors flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                AI Chat
              </button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://github.com/dev-leemin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/dev-leemin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:leemin-dev@gmail.com"
              className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <a
            href="https://github.com/dev-leemin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-dark text-xs font-mono hover:text-accent transition-colors"
          >
            <p>Built with Next.js & Claude AI</p>
            <p className="mt-1">Designed by sm.lee</p>
          </a>
        </footer>
      </main>

      {/* Left Side Social */}
      <div className="hidden md:flex fixed left-6 lg:left-10 bottom-0 flex-col items-center gap-6">
        <a
          href="https://github.com/dev-leemin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/dev-leemin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:leemin-dev@gmail.com"
          className="text-dev-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-dev-slate" />
      </div>

      {/* Right Side Email */}
      <div className="hidden md:flex fixed right-6 lg:right-10 bottom-0 flex-col items-center gap-6">
        <a
          href="mailto:leemin-dev@gmail.com"
          className="text-dev-slate hover:text-accent transition-colors font-mono text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          leemin-dev@gmail.com
        </a>
        <div className="w-px h-24 bg-dev-slate" />
      </div>

      {/* ChatBot */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}

      {/* Floating Chat Button - Mobile */}
      {!showChat && (
        <motion.button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-navy-light border border-accent text-accent rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-accent-tint transition-colors md:hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Bot className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}
