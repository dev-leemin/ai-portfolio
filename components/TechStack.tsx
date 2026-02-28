'use client'

import { motion } from 'framer-motion'
import { techCategories } from '@/lib/resume-data'

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
