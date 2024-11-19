// src/components/Navbar.tsx
"use client"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold">
              IW<span className="text-primary">.</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}