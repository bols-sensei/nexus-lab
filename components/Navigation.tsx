'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Vision', href: '#problem' },
  { label: 'Concept', href: '#concept' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Manifesto', href: '#final' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nx-nav ${scrolled ? 'scrolled' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border border-cyan-400/60 animate-pulse" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-80" />
            <div className="absolute inset-2 rounded-full bg-nx-bg" />
            <div className="absolute inset-[9px] rounded-full bg-cyan-400" />
          </div>
          <span
            className="font-display font-bold text-sm tracking-widest text-white"
            style={{ letterSpacing: '0.2em' }}
          >
            NEXUS LAB
          </span>
        </motion.div>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-50 mx-4 rounded-xl glass-card p-6 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-mono text-xs tracking-widest uppercase text-gray-300 hover:text-cyan-400 text-left transition-colors"
                >
                  <span className="text-cyan-500/50 mr-3">0{i + 1}</span>
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
