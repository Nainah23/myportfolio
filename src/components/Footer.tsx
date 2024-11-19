// src/components/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Nainah23',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:kamauwainaina29@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamau-wainaina-534616189/',
    icon: Linkedin,
  }
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <a href="#home" className="text-2xl font-bold">
              IW<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Full Stack Developer & Data Analytics Enthusiast
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Ian Wainaina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}