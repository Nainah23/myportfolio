// src/components/About.tsx
"use client"
import { motion } from 'framer-motion'
import { BookOpen, Code, Database, GraduationCap } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'ALX-Africa: Full-Stack Software Engineering with specialization in Backend Web Development Processes',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development with modern technologies like React, Node.js, and Python',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Proficient in data visualization and analysis using Power BI, Tableau, and SQL',
  },
  {
    icon: BookOpen,
    title: 'Languages',
    description: 'Fluent in English and Swahili, with professional proficiency in Japanese',
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A versatile software engineer with a unique blend of technical expertise and analytical thinking,
              derived from my background in Economics and Statistics. I specialize in creating innovative
              solutions that bridge the gap between complex data and user-friendly applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Trained at ALX-Africa in software engineering, I've developed expertise in building
                AI-driven platforms, fintech solutions, and event management systems. My experience
                spans both frontend and backend development, with a focus on creating scalable
                and maintainable applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                As a Kenyatta University graduate with a B.Sc. in Economics and Statistics, I bring a data-driven
                approach to software development, combining analytical skills with technical expertise
                to deliver comprehensive solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Technical Approach</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I specialize in creating full-stack applications using modern technologies and best practices.
                My approach emphasizes clean code, thorough documentation, and scalable architecture.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                With experience in both traditional web development and data analytics, I bridge the
                gap between complex backend systems and intuitive user interfaces, ensuring both
                functionality and accessibility.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}