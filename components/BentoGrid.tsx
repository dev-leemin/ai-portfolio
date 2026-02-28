'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder, Github } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { careerProjects, personalProjects } from '@/lib/resume-data'
import type { CareerProject } from '@/lib/resume-data'

function FeaturedProject({
  project,
  index,
  reversed,
}: {
  project: CareerProject
  index: number
  reversed: boolean
}) {
  const [imgError, setImgError] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative grid md:grid-cols-12 gap-2 items-center mb-24 last:mb-0"
      >
        {/* Image */}
        <div
          className={`md:col-span-7 relative ${
            reversed ? 'md:col-start-6 md:row-start-1' : ''
          }`}
        >
          <div
            className="relative aspect-video bg-navy-light rounded overflow-hidden group cursor-pointer"
            onClick={() => {
              if (project.image && !imgError) setSelectedImage(project.image)
            }}
          >
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
            {project.image && !imgError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300 grayscale group-hover:grayscale-0"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-dev-slate text-sm font-mono">
                {project.image ? 'Loading...' : 'No Preview'}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div
          className={`md:col-span-6 md:row-start-1 relative z-10 ${
            reversed
              ? 'md:col-start-1 md:text-left'
              : 'md:col-start-7 md:text-right'
          }`}
        >
          <div className={`flex items-center gap-2 mb-2 flex-wrap ${reversed ? '' : 'md:justify-end'}`}>
            <p className="text-accent font-mono text-xs">{project.role} @ {project.company}</p>
            <span className={`text-xs font-mono px-2 py-0.5 rounded ${
              project.type === '공공기관'
                ? 'bg-accent-tint text-accent'
                : project.type === '정부용역'
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'bg-purple-500/10 text-purple-400'
            }`}>
              {project.type}
            </span>
            <span className="text-xs font-mono text-dev-slate">
              팀 {project.team}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-lightest-slate mb-4 hover:text-accent transition-colors">
            {project.title}
          </h3>

          <div className="bg-navy-light rounded-lg p-5 md:p-6 mb-4 shadow-xl">
            <p className="text-sm leading-relaxed text-slate-light">{project.description}</p>
            {project.challenge && (
              <div className="mt-3 pt-3 border-t border-navy-lighter">
                <p className="text-xs text-accent font-mono mb-1">// challenge & solution</p>
                <p className="text-xs leading-relaxed text-dev-slate">{project.challenge}</p>
              </div>
            )}
            {project.result && (
              <div className="mt-2">
                <p className="text-xs text-accent font-mono mb-1">// result</p>
                <p className="text-xs leading-relaxed text-slate-light">{project.result}</p>
              </div>
            )}
          </div>

          <div className={`flex flex-wrap gap-2 mb-3 text-xs font-mono ${reversed ? '' : 'md:justify-end'}`}>
            <span className="text-dev-slate">{project.period}</span>
          </div>

          <div className={`flex flex-wrap gap-2 mb-3 text-xs font-mono ${reversed ? '' : 'md:justify-end'}`}>
            {project.tech.map((t) => (
              <span key={t} className="text-slate-light">{t}</span>
            ))}
          </div>

          <button
            onClick={() => setShowDetail(!showDetail)}
            className={`text-xs font-mono text-accent hover:underline ${reversed ? '' : 'md:float-right'}`}
          >
            {showDetail ? '접기 ▴' : '상세 업무 보기 ▾'}
          </button>
        </div>
      </motion.div>

      {/* Detail Expand */}
      {showDetail && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-navy-light border border-navy-lighter rounded-lg p-6 -mt-20 mb-24"
        >
          <p className="text-accent font-mono text-xs mb-4">// responsibilities</p>
          <ul className="space-y-2">
            {project.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                <span className="text-slate-light">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-lightest-slate hover:text-accent transition-colors font-mono text-sm"
            >
              Close [ESC]
            </button>
            <div className="relative w-full aspect-video bg-navy-light rounded overflow-hidden border border-navy-lighter">
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

function PersonalProjectCard({
  project,
  index,
}: {
  project: (typeof personalProjects)[0]
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-navy-light rounded-lg overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      {project.image && !imgError ? (
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            onError={() => setImgError(true)}
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Folder className="w-10 h-10 text-accent" />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dev-leemin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-light hover:text-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-sm leading-relaxed flex-1 mb-3">{project.description}</p>

        {project.challenge && (
          <div className="mb-4 p-3 bg-navy/50 rounded border border-navy-lighter">
            <p className="text-xs text-accent font-mono mb-1">// challenge</p>
            <p className="text-xs leading-relaxed text-dev-slate">{project.challenge}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-dev-slate">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <div>
      {/* Career Projects - Featured */}
      <div className="mb-16">
        <p className="text-accent font-mono text-sm mb-8">경력 프로젝트</p>
        {careerProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            index={index}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Personal Projects */}
      <div>
        <p className="text-accent font-mono text-sm mb-2">개인 프로젝트</p>
        <h3 className="text-2xl font-bold text-lightest-slate mb-8">
          Other Noteworthy Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
