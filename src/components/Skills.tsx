// src/components/Skills.tsx
"use client"
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'C', 'TypeScript', 'R'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'Deno'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'Data Analytics',
    skills: ['Power BI', 'Tableau', 'Looker Studio', 'SQL', 'Data Visualization'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Linux', 'Nginx', 'Shell Scripting'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { lang: 'English', level: 'Fluent' },
                { lang: 'Swahili', level: 'Fluent' },
                { lang: 'Japanese', level: 'Semi-fluent' },
              ].map((language) => (
                <div
                  key={language.lang}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                >
                  <div className="font-semibold">{language.lang}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {language.level}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}