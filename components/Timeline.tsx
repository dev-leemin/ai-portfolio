'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { experiences } from '@/lib/resume-data'

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
