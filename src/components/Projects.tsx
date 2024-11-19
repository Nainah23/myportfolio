// src/components/Projects.tsx
"use client"
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Church Website',
    description: 'A full-stack website enabling churches to livestream services, process donations, and manage appointments. Features AI integration and payment processing.',
    image: '/Church.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'AI APIs', 'MPESA'],
    links: {
      github: 'https://github.com/Nainah23',
    },
    inProgress: true,
  },
  {
    title: 'Payscrow',
    description: 'A secure escrow service facilitating transactions through Mpesa integration, ensuring safe and reliable payments between parties.',
    image: '/Payscrow.webp',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MPESA API'],
    links: {
      github: 'https://github.com/Nainah23',
    },
  },
  {
    title: 'Event Management System',
    description: 'A comprehensive platform for event creation and ticket purchases, integrated with multiple payment gateways for seamless transactions.',
    image: '/Event.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    links: {
      github: 'https://github.com/Nainah23',
    },
  },
  {
    title: 'Airbnb Clone',
    description: 'A full-featured property listing and booking platform modeled after Airbnb, demonstrating proficiency in full-stack development.',
    image: '/image.png',
    tags: ['Python', 'Django', 'MySQL', 'HTML/CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/Nainah23',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                {/* <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="/api/placeholder/800/450"
                    alt={project.title}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div> */}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.inProgress && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-sm text-green-500">In Progress</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}