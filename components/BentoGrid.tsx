'use client'

import { motion } from 'framer-motion'
import { Train, Flame, MapPin, Layers, Building2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'KORAIL ERP - 급여시스템',
    company: '한국철도공사',
    role: '개발자',
    description: '급여 시스템 개발 담당. 전자정부 프레임워크 기반 구축',
    icon: Train,
    color: 'from-blue-500 to-cyan-500',
    tech: ['WebSquare', '전자정부 프레임워크', 'Tibero', 'JavaScript'],
    period: '2021.05 - 2022.04',
    responsibilities: [
      '급여 시스템 개발',
      'WebSquare 기반 화면 구현',
      'Tibero DB 연동'
    ],
    image: '/projects/korail.png',
  },
  {
    id: 2,
    title: '가스안전공사 차세대 ERP',
    company: '한국가스안전공사',
    role: '개발자',
    description: '구 ERP 마이그레이션 및 차세대 시스템 구축',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    tech: ['Nexacro', 'PowerMDD', 'Oracle'],
    period: '2022.07 - 2023.03',
    responsibilities: [
      '인사-평가 시스템 개발',
      '데이터 마이그레이션',
      '재무-회계 일부',
      '간이결재 시스템 관리',
      '권한 관리'
    ],
    image: '/projects/gas.png',
  },
  {
    id: 3,
    title: 'Zeniel ERP',
    company: 'Zeniel',
    role: '개발자',
    description: '시스템, 공통, 관리회계(경영관리) 전반 개발',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2023.04 - 2024.07',
    responsibilities: [
      '사용자/권한/메뉴 관리',
      '오류사항 관리',
      '파일 업다운로드',
      '그룹웨어 연동',
      '관리회계 시스템',
      '대사우 시스템'
    ],
    image: '/projects/zeniel.png',
  },
  {
    id: 4,
    title: '노지 HD맵 프로젝트',
    company: '(프로젝트)',
    role: '개발자',
    description: '드론 촬영 이미지 정사 처리 및 식생지수 조회 플랫폼',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
    tech: ['WebSquare SP5', 'PostgreSQL', '전자정부 4.0'],
    period: '2024.11 - 2024.12',
    responsibilities: [
      '시스템 구축',
      '데이터베이스 관리',
      '플랫폼 생성',
      '이미지 업로드 및 정사 처리',
      '식생지수 조회 기능'
    ],
    image: null, // HD맵 이미지 없음
  },
  {
    id: 5,
    title: '인천환경공단 ERP',
    company: '인천광역시환경공단',
    role: 'PL (프로젝트 리더)',
    description: '공통, 시스템, 인사-평가 분야 총괄',
    icon: Building2,
    color: 'from-teal-500 to-cyan-500',
    tech: ['Nexacro', '전자정부', 'PostgreSQL'],
    period: '2024.07 - 진행중',
    responsibilities: [
      'SSO 연계',
      'Handy 전자결재 연동',
      '공통 모듈 개발',
      '시스템 관리',
      '인사-평가 시스템',
      'PL로서 프로젝트 총괄'
    ],
    image: '/projects/incheon.png',
  },
  {
    id: 6,
    title: '실시간 협업 화이트보드',
    company: '개인 프로젝트',
    role: '풀스택 개발자',
    description: 'Next.js 16 + Socket.io 기반 실시간 다중 사용자 협업 화이트보드',
    icon: Layers,
    color: 'from-violet-500 to-purple-500',
    tech: ['Next.js 16', 'React 19', 'Socket.io', 'Canvas API', 'Zustand', 'Tailwind CSS'],
    period: '2025.12',
    responsibilities: [
      'WebSocket 실시간 협업 구현',
      'Canvas API 드로잉 시스템',
      '방 기반 다중 사용자 관리',
      '실시간 그리기 동기화',
      'Undo/Redo 히스토리 관리',
      '색상/도구 시스템 구현',
      '모바일 반응형 지원'
    ],
    image: '/projects/whiteboard.png',
  },
]

/**
 * 프로젝트 카드 그리드 - 상세 정보 + 이미지 포함
 */
export default function BentoGrid() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  const toggleExpanded = (projectId: number) => {
    setExpandedProjects(prev => ({ ...prev, [projectId]: !prev[projectId] }))
  }

  const openImageModal = (src: string, title: string) => {
    setSelectedImage({ src, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all"
        >
          {/* 헤더 */}
          <div className="flex items-start gap-4 mb-4">
            {/* 아이콘 */}
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
            >
              <project.icon className="w-6 h-6 text-white" />
            </div>

            {/* 제목 및 회사 */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{project.company}</span>
                <span>•</span>
                <span className="text-blue-400">{project.role}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{project.period}</p>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-sm text-slate-300 mb-4">{project.description}</p>

          {/* 프로젝트 이미지 */}
          <div className="mb-4 h-48 bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden relative group">
            {project.image && !imageErrors[project.id] ? (
              <>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(project.id)}
                />
                <button
                  onClick={() => openImageModal(project.image!, project.title)}
                  className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <span className="text-white text-sm font-semibold bg-slate-900/80 px-4 py-2 rounded-lg">
                    클릭하여 확대
                  </span>
                </button>
              </>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-slate-500 text-sm">
                  {project.image ? '이미지 로딩 중...' : '이미지 준비중'}
                </p>
              </div>
            )}
          </div>

          {/* 주요 업무 */}
          <div className="mb-4">
            <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">주요 업무</h4>
            <ul className="space-y-1">
              {(expandedProjects[project.id]
                ? project.responsibilities
                : project.responsibilities.slice(0, 3)
              ).map((task, idx) => (
                <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{task}</span>
                </li>
              ))}
              {project.responsibilities.length > 3 && (
                <li>
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-1"
                  >
                    {expandedProjects[project.id]
                      ? '접기'
                      : `+${project.responsibilities.length - 3}개 업무 더보기`}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* 기술 스택 */}
          <div>
            <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        ))}
      </div>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* 이미지 */}
            <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* 제목 */}
            <p className="text-center text-white mt-4 text-lg font-semibold">
              {selectedImage.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
