// src/app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <div className="text-red-500 text-2xl">
        Test TailwindCSS
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}


// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Ian Wainaina | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web applications with expertise in React, Node.js, and data analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-light dark:bg-dark">
        {children}
      </body>
    </html>
  )
}