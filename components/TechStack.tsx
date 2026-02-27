'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'WebSquare SP5', experience: '4년' },
      { name: 'Nexacro', experience: '2년' },
      { name: 'JavaScript', experience: '4년' },
      { name: 'Next.js / React', experience: '학습중' },
      { name: 'TypeScript', experience: '학습중' },
      { name: 'Tailwind CSS', experience: '학습중' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', experience: '4년' },
      { name: '전자정부 프레임워크', experience: '4년' },
      { name: 'PowerMDD', experience: '1년' },
      { name: 'Prisma ORM', experience: '학습중' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', experience: '3년' },
      { name: 'Oracle', experience: '3년' },
      { name: 'Tibero', experience: '1년' },
      { name: 'Neon Serverless', experience: '학습중' },
    ],
  },
  {
    category: 'Integration',
    skills: [
      { name: 'SSO 연계', experience: '1년' },
      { name: '전자결재 시스템', experience: '2년' },
      { name: '그룹웨어 연동', experience: '1년' },
    ],
  },
  {
    category: 'Server & Infra',
    skills: [
      { name: 'Nginx', experience: '3년' },
      { name: 'Tomcat', experience: '4년' },
      { name: 'Apache', experience: '2년' },
      { name: 'Vercel', experience: '학습중' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', experience: '4년' },
      { name: 'JMeter', experience: '2년' },
      { name: 'AI/ML (Groq, Claude)', experience: '학습중' },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.08 }}
          className="bg-navy-light border border-navy-lighter rounded-lg p-6 hover:border-accent/30 transition-colors"
        >
          <h4 className="text-accent font-mono text-sm mb-5">
            {`// ${category.category}`}
          </h4>

          <ul className="space-y-3">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex items-center justify-between">
                <span className="text-slate-light text-sm">{skill.name}</span>
                <span className={`text-xs font-mono ${
                  skill.experience === '학습중' ? 'text-accent' : 'text-dev-slate'
                }`}>
                  {skill.experience}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
