'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    category: 'Frontend Framework',
    skills: [
      { name: 'WebSquare SP5', level: 95, experience: '4년' },
      { name: 'Nexacro', level: 90, experience: '2년' },
      { name: 'JavaScript', level: 85, experience: '4년' },
    ],
  },
  {
    category: 'Backend & Framework',
    skills: [
      { name: 'Java', level: 85, experience: '4년' },
      { name: '전자정부 프레임워크', level: 90, experience: '4년' },
      { name: 'PowerMDD', level: 70, experience: '1년' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85, experience: '3년' },
      { name: 'Oracle', level: 80, experience: '3년' },
      { name: 'Tibero', level: 70, experience: '1년' },
    ],
  },
  {
    category: 'Integration & Others',
    skills: [
      { name: 'SSO 연계', level: 80, experience: '1년' },
      { name: '전자결재 시스템', level: 75, experience: '2년' },
      { name: '그룹웨어 연동', level: 75, experience: '1년' },
    ],
  },
  {
    category: 'Server & Deployment',
    skills: [
      { name: 'Nginx', level: 75, experience: '3년' },
      { name: 'Tomcat', level: 80, experience: '4년' },
      { name: 'Apache', level: 70, experience: '2년' },
      { name: 'JMeter', level: 70, experience: '2년' },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="px-6 py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-3">기술 스택</h3>
          <p className="text-slate-400">4년간 축적한 공공기관 ERP 개발 기술</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-6">{category.category}</h4>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500">{skill.experience}</span>
                        <span className="text-xs font-bold text-blue-400">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
